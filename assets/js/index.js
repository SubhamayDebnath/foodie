const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    nav.classList.toggle("dark-background", window.scrollY > 0);
    nav.classList.toggle("fixed-top", window.scrollY > 0);
});
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    // effect: 'fade',
    autoplay:
    {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        300: {
            items: 2
        },
        600: {
            items: 3
        },
        900: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
});
// review
$('#owl-carousel-2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        992: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});
$(document).ready(function () {

    $('.filter_item').click(function () {

        $(this).addClass('filter_active').siblings().removeClass('filter_active');

        var filter = $(this).attr('data-filter')

        if (filter == 'all') {
            $('.main_card').show(500);
        } else {
            $('.main_card').not('.' + filter).hide(300);
            $('.main_card').filter('.' + filter).show(500);
        }

    })
});


// email
const modal_dialog = document.querySelector('.modal-dialog');
if (window.innerWidth > 992) {
    modal_dialog.classList.add('modal-dialog-centered');
}
else {
    modal_dialog.classList.remove('modal-dialog-centered');
}

const loader = document.querySelector(".loader");

const loader_fun = () => {
    loader.style.display = "none";
};

const scroll_btn = document.querySelector(".top_scroll");

window.addEventListener("scroll", () => {
    scroll_btn.classList.toggle("scroll_active", window.scrollY > 400);
});


// form

