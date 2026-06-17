const pages =
    document.querySelectorAll('.page');

let autoMode = false;

function showPage(id) {

    pages.forEach(page => {

        page.classList.remove('active');

    });

    document
        .getElementById(id)
        .classList
        .add('active');
}


/* LANDING */

document
    .getElementById('interactiveBtn')
    .addEventListener('click', () => {

        autoMode = false;

        showPage('ucapan');
    });


document
    .getElementById('autoBtn')
    .addEventListener('click', () => {

        autoMode = true;

        startAutoFlow();
    });


/* NEXT BUTTON */

document
    .querySelectorAll('.next-btn')
    .forEach(button => {

        button.addEventListener('click', () => {

            autoMode = false;

            showPage(
                button.dataset.next
            );

        });

    });

function startAutoFlow() {

    showPage('ucapan');

    setTimeout(() => {

        if (!autoMode) return;

        showPage('puisi');

    }, 45000);


    setTimeout(() => {

        if (!autoMode) return;

        showPage('yasin');

    }, 75000);

}

document.addEventListener(

    'click',

    () => {

        autoMode = false;

    },

    { once: true }

);
