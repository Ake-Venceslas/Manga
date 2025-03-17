$(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayspeed: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
})

const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});