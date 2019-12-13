window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.jumbo-content', {
    duration: 2000,
    origin: 'right'
});
sr.reveal('.small-img', {
    duration: 3000,
    origin: 'bottom'
});
sr.reveal('.btn-secondary', {
    duration: 1000,
    delay: 1500,
    origin: 'bottom'
});
sr.reveal('.title', {
    duration: 4000,
    origin: 'top'
});
sr.reveal('.fitur-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
});
sr.reveal('.fitur-left', {
    duration: 2000,
    delay: 1000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});
sr.reveal('.galtop-left', {
    duration: 2000,
    delay: 1000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.1
});
sr.reveal('.galtop-right', {
    duration: 2000,
    delay: 1000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.1
});
sr.reveal('.galbot-left', {
    duration: 2000,
    delay: 1500,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.1
});
sr.reveal('.galbot-right', {
    duration: 2000,
    delay: 1500,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.1
});
sr.reveal('.bg-petani', {
    duration: 2000,
    delay: 500,
    origin: 'top',
    distance: '300px',
    viewFactor: 0.2
});

// smooth scroll

$(function () {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });
});


// Readmore
var i = 0;

function read1() {
    if (!i) {
        document.getElementById("more").style.
        display = "inline";
        document.getElementById("dots").style.
        display = "none";
        document.getElementById("read").innerHTML = "Kembali";
        i = 1;
    } else {
        document.getElementById("more").style.
        display = "none";
        document.getElementById("dots").style.
        display = "inline";
        document.getElementById("read").innerHTML = "Baca Selengkapnya  &raquo;";
        i = 1;
    }
}
var i = 0;

function read2() {
    if (!i) {
        document.getElementById("more2").style.
        display = "inline";
        document.getElementById("dots2").style.
        display = "none";
        document.getElementById("read2").innerHTML = "Kembali";
        i = 1;
    } else {
        document.getElementById("more2").style.
        display = "none";
        document.getElementById("dots2").style.
        display = "inline";
        document.getElementById("read2").innerHTML = "Baca Selengkapnya  &raquo;";
        i = 1;
    }
}
var i = 0;

function read3() {
    if (!i) {
        document.getElementById("more3").style.
        display = "inline";
        document.getElementById("dots3").style.
        display = "none";
        document.getElementById("read3").innerHTML = "Kembali";
        i = 1;
    } else {
        document.getElementById("more3").style.
        display = "none";
        document.getElementById("dots3").style.
        display = "inline";
        document.getElementById("read3").innerHTML = "Baca Selengkapnya  &raquo;";
        i = 1;
    }
}