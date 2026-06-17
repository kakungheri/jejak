document
.getElementById(
    'interactiveBtn'
)
.addEventListener(
    'click',
    () => {

        window.location.href =
            '#ucapan';

    }
);

document
.getElementById(
    'autoBtn'
)
.addEventListener(
    'click',
    () => {

        localStorage.setItem(
            'autoMode',
            'true'
        );

        window.location.href =
            '#ucapan';

    }
);
