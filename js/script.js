
function menuHamb() {
    var menu = document.querySelector('.nav__hamb-menu')
    menu.classList.toggle("visible")
}

$(function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: $('.content'),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }

            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    })

}) 