const container =
document.getElementById(
'yasinContainer'
);

const audio =
document.getElementById(
'yasinAudio'
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

audio.play();

});

});

}

playBtn.onclick=()=>{

audio.play();

};

pauseBtn.onclick=()=>{

audio.pause();

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

el.scrollIntoView({

behavior:
'smooth',

block:
'center'

});

}

}
