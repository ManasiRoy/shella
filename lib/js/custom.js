$(document).ready(function () {

    $("#ex2").slider({});

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
        dots: false,
        nav: true,
        margin: 0,
        autoplayHoverPause: true,
        thumbs: true,
        thumbsPrerendered: true
    });
    $('.onhover .dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
    });
    tab();

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
$('#main_navbar').bootnavbar();

function tab() {
    var $tabs = $('#horizontalTab');
    $tabs.responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        click: function (e, tab) {
            $('.info').html('Tab <strong>' + tab.id + '</strong> clicked!');
        },
        activate: function (e, tab) {
            $('.info').html('Tab <strong>' + tab.id + '</strong> activated!');
        },
        activateState: function (e, state) {
            //console.log(state);
            $('.info').html('Switched from <strong>' + state.oldState + '</strong> state to <strong>' + state.newState + '</strong> state!');
        }
    });

    $('#start-rotation').on('click', function () {
        $tabs.responsiveTabs('startRotation', 1000);
    });
    $('#stop-rotation').on('click', function () {
        $tabs.responsiveTabs('stopRotation');
    });
    $('#start-rotation').on('click', function () {
        $tabs.responsiveTabs('active');
    });
    $('#enable-tab').on('click', function () {
        $tabs.responsiveTabs('enable', 3);
    });
    $('#disable-tab').on('click', function () {
        $tabs.responsiveTabs('disable', 3);
    });
    $('.select-tab').on('click', function () {
        $tabs.responsiveTabs('activate', $(this).val());
    });

}