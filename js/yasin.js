const container =
document.getElementById(
'yasinContainer'
);

const audio =
document.getElementById(
'yasinAudio'
);

const bgMusic =
document.getElementById(
'bgMusic'
);

const playBtn =
document.getElementById(
'playYasin'
);

const pauseBtn =
document.getElementById(
'pauseYasin'
);

let ayahs=[];

fetch(
'data/yasin.json'
)

.then(res=>res.json())

.then(data=>{

    ayahs=data;

    renderAyahs();
    enableAyahClick();

});

function renderAyahs(){

container.innerHTML='';

ayahs.forEach(ayah=>{

container.innerHTML+=`

<div
class="ayah"
id="ayah-${ayah.no}"
data-time="${ayah.time}">

<div class="ayah-number">

Ayat ${ayah.no}

</div>

<div class="arab">

${ayah.arab}

</div>

<div class="latin">

${ayah.latin}

</div>

<div class="indo">

${ayah.indo}

</div>

</div>

`;

});

}

function enableAyahClick(){

document
.querySelectorAll('.ayah')

.forEach(ayah=>{

ayah.addEventListener(

'click',

()=>{

const startTime=

parseFloat(
ayah.dataset.time
);

audio.currentTime=
startTime;

audio.();

});

});

}

playBtn.onclick=()=>{

fadeOutMusic();

audio.play();

};

pauseBtn.onclick=()=>{

audio.pause();

fadeInMusic();

};

audio.addEventListener(

'timeupdate',

()=>{

const current=
audio.currentTime;

updateProgress();

highlightAyah(
current
);

'ended',

()=>{

fadeInMusic();
    
});

function updateProgress(){

const percent=

(audio.currentTime/

audio.duration)

*100;

document
.getElementById(
'progressFill'
)

.style.width=

percent+'%';

}

let currentActiveAyah = null;

function highlightAyah(time){

let active=null;

for(

let i=0;

i<ayahs.length;

i++

){

const current=
ayahs[i];

const next=
ayahs[i+1];

if(

time>=current.time &&

(!next ||
time<next.time)

){

active=
current.no;

break;

}

}


/* kalau ayat sama,
jangan lakukan apa-apa */

if(
active===currentActiveAyah
) return;


currentActiveAyah=
active;


document
.querySelectorAll(
'.ayah'
)

.forEach(

a=>a.classList.remove(
'active-ayah'
)

);


if(active){

const el=

document
.getElementById(
`ayah-${active}`
);

el.classList.add(
'active-ayah'
);


/* scroll HANYA saat
pindah ayat */

el.scrollIntoView({

behavior:'smooth',

block:'center'

});

}

}

function fadeOutMusic(){

let volume=
bgMusic.volume;

const fade=

setInterval(()=>{

if(volume<=0){

clearInterval(
fade
);

bgMusic.pause();

}

volume-=0.05;

bgMusic.volume=
Math.max(
volume,
0
);

},100);

}



function fadeInMusic(){

bgMusic.play();

let volume=0;

bgMusic.volume=0;

const fade=

setInterval(()=>{

if(volume>=0.3){

clearInterval(
fade
);

}

volume+=0.05;

bgMusic.volume=
Math.min(
volume,
0.3
);

},100);

}
