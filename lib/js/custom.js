$(document).ready(function () {

    $("#ex2").slider({});
    $("#ex3").slider({});

    automargin();

    $("#carouselExample").owlCarousel({
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4,
                dots: true
            }
        }
    })

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

        margin: 0,
        autoplayHoverPause: true,
        thumbs: true,
        thumbsPrerendered: true,
        responsive: {
            0: {
                dots: false,
                nav: true,
            },
            600: {
                dots: false,
                nav: true,
                autoplay: false,
            },
            1000: {
                dots: false,
                nav: true,
            }
        },


        // Class that will be used on the thumbnail container
        thumbContainerClass: 'owl-thumbs',

        // Class that will be used on the thumbnail item's
        thumbItemClass: 'owl-thumb-item'
    });

    $('.onhover .dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
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

window.onscroll = function () {
    myFunction();
};

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
    $('.productview').find('.col').removeClass().addClass('col col-6');
    $('.productview').find('.detailsProduct').hide();
    setTimeout(function () {
        updateOwl();
    }, 1)
})
$('.gridthree').on('click', function () {
    $('.productview').find('.col').removeClass().addClass('col col-4');
    $('.productview').find('.detailsProduct').hide();
    setTimeout(function () {
        updateOwl();
    }, 1)
})

$('.gridfour').on('click', function () {
    $('.productview').find('.col').removeClass().addClass('col col-3');
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

$('.gridview ul li').on('click', function () {
    $(this).parent().find('li.active').removeClass('active');
    $(this).addClass('active');
});



function automargin() {
    var footerHeight = $('.footer').outerHeight(true);
    $(".main").css("margin-bottom", footerHeight);
}


$(window).on('resize', automargin);

$('#featured a').click(function () {
    $('#selected').text($(this).text());
});
$('#size a').click(function () {
    $('#selected2').text($(this).text());
});



