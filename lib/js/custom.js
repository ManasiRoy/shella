$(document).ready(function () {
    automargin();
    jQuery('#bannerSlider').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        dots: true,
        nav: true,
        margin: 0,
        autoplay: true
    });
    $(".owl-prev").html('<span class="icon-leftarrow"></span>');
    $(".owl-next").html('<span class="icon-right-arrow"></span>');

    jQuery('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        dots: true,
        nav: true,
        margin: 0,
        autoplayHoverPause: true,
        thumbs: true,
        thumbsPrerendered: true
    });
})
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

var $owl = $('.owl-carousel'),
    updateOwl = function () {
        $owl.each(function () {
            $(this).data('owl.carousel').onResize();
        });
    };

$(window).on('resize', updateOwl);



$('.gridtwo').on('click', function () {
    $('.productview').find('.col').removeClass().addClass('col col-md-6');
    $('.productview').find('.detailsProduct').hide();
    setTimeout(function () {
        updateOwl();
    }, 1)
})
$('.gridthree').on('click', function () {
    $('.productview').find('.col').removeClass().addClass('col col-md-4');
    $('.productview').find('.detailsProduct').hide();
    setTimeout(function () {
        updateOwl();
    }, 1)
})

$('.gridfour').on('click', function () {
    $('.productview').find('.col').removeClass().addClass('col col-md-3');
    $('.productview').find('.detailsProduct').hide();
    setTimeout(function () {
        updateOwl();
    }, 1)
})

$('.gridone').on('click', function () {
    $('.productview').find('.col').removeClass().addClass('col col-12');
    $('.productview').find('.detailsProduct').show();

    setTimeout(function () {
        updateOwl();
    }, 1)
})

function automargin() {
    var footerHeight = $('.footer').innerHeight();
    $(".main").css("margin-bottom", footerHeight);
}


$(window).on('resize', automargin);
