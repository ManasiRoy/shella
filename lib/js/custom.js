jQuery(function ($) {
    jQuery('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        dots: false,
        nav: true,
        margin: 0,
        autoplayHoverPause: true,
        thumbs: true,
        thumbsPrerendered: true
    });
});
document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#menu", {
            wrappers: ["bootstrap"],
            counters: true,
            searchfield: {
                placeholder: 'Search Products...',
            },
            navbars: [

                {
                    content: ['close'],
                },
                {
                    content: ['searchfield'],
                },


            ],
        });
    }
);


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("myHeader");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
