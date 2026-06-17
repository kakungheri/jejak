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

function showPage(id) {

    pages.forEach(page => {

        page.classList.remove('active');

    });

    const targetPage =
        document.getElementById(id);

    if (targetPage) {

        targetPage.classList.add('active');

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
