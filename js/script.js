const pages = document.querySelectorAll('.page');

let autoMode = false;


/* =========================
   AUTO MODE
========================= */

function stopAutoMode() {

    autoMode = false;

    console.log('Auto mode dihentikan');

}


/* =========================
   PAGE NAVIGATION
========================= */

function showPage(id){

pages.forEach(page=>{

page.classList.remove(
'active'
);

});

document
.getElementById(id)
.classList.add(
'active'
);


/* STOP YASIN */

const audio=

document.getElementById(
'yasinAudio'
);

if(audio){

audio.pause();

audio.currentTime=0;

}

}

/* =========================
   COVER
========================= */

const enterBtn =
    document.getElementById('enterBtn');

if (enterBtn) {

    enterBtn.addEventListener('click', () => {

        showPage('landing');

    });

}


/* =========================
   LANDING
========================= */

const interactiveBtn =
    document.getElementById('interactiveBtn');

if (interactiveBtn) {

    interactiveBtn.addEventListener('click', () => {

        stopAutoMode();

        showPage('ucapan');

    });

}


const autoBtn =
    document.getElementById('autoBtn');

if (autoBtn) {

    autoBtn.addEventListener('click', () => {

        autoMode = true;

        startAutoFlow();

    });

}


/* =========================
   NEXT BUTTONS
========================= */

document
    .querySelectorAll('.next-btn')
    .forEach(button => {

        button.addEventListener('click', () => {

            stopAutoMode();

            showPage(
                button.dataset.next
            );

        });

    });


/* =========================
   AUTO FLOW
========================= */

function startAutoFlow() {

    showPage('ucapan');

    /* Ucapan → Puisi */
    setTimeout(() => {

        if (!autoMode) return;

        showPage('puisi');

    }, 45000);


    /* Puisi → Yasin */
    setTimeout(() => {

        if (!autoMode) return;

        showPage('yasin');

    }, 75000);


    /*
    Nanti tambahkan:

    showPage('galeri');

    showPage('ruang-doa');

    */

}


/* =========================
   USER INTERACTION
========================= */

document.addEventListener(

    'pointerdown',

    () => {

        if (autoMode) {

            stopAutoMode();

        }

    }

);

/* =========================
   RENUNGAN SLIDER
========================= */

const cards =
    document.querySelectorAll(
        '.renungan-card'
    );

let currentPuisi = 0;

const indicator =
    document.getElementById(
        'renunganIndicator'
    );

function showPuisi(index){

    cards.forEach(card => {

        card.classList.remove('active');

    });

    cards[index]
        .classList
        .add('active');

    indicator.textContent =
        `${index + 1} / ${cards.length}`;
}

document
    .getElementById('nextPuisi')
    ?.addEventListener('click', () => {

        currentPuisi++;

        if(currentPuisi >= cards.length){

            currentPuisi = 0;

        }

        showPuisi(currentPuisi);

    });

document
    .getElementById('prevPuisi')
    ?.addEventListener('click', () => {

        currentPuisi--;

        if(currentPuisi < 0){

            currentPuisi =
                cards.length - 1;

        }

        showPuisi(currentPuisi);

    });

const modal =
document.getElementById(
'photoModal'
);

const modalImage =
document.getElementById(
'modalImage'
);

const closeModal =
document.getElementById(
'closeModal'
);

document
.querySelectorAll(
'.gallery-grid img'
)

.forEach(img=>{

img.addEventListener(

'click',

()=>{

modalImage.src=
img.src;

modal.classList.add(
'active'
);

}

);

});

closeModal
.addEventListener(

'click',

()=>{

modal.classList.remove(
'active'
);

}

);

modal
.addEventListener(

'click',

e=>{

if(
e.target===modal
){

modal.classList.remove(
'active'
);

}

}

);

const form =
document.getElementById(
'messageForm'
);

const messageList =
document.getElementById(
'messageList'
);

form.addEventListener(

'submit',

e=>{

e.preventDefault();

const name=

document
.getElementById(
'name'
).value;

const message=

document
.getElementById(
'message'
).value;


messageList.innerHTML += `

<div class="message-card">

<div class="message-name">

${name}

</div>

<div>

${message}

</div>

</div>

`;

form.reset();

});
