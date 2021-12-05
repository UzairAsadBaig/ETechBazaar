
export const loadCarouselContent=function () {

    $( ".owl-carousel" ).owlCarousel( {
        stagePadding: 0,
        loop: true,
        margin: 12,
        autoplay: 300,
        //autoplayTimeout: 3500,
        smartSpeed: 1800,
        responsiveClass: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1.3,
            },
            289: {
                items: 2.3,
            },
            376: {
                items: 2.4,
            },
            400: {
                items: 2.5,
            },
            500: {
                items: 2,
            },
            600: {
                items: 2.5,
            },
            800: {
                items: 3,
            },

            900: {
                items: 2.6,
            },
            1000: {
                items: 3.3,
            },
            1200: {
                items: 4,
            },
            1400: {
                items: 5,
            },
        },
    } );
        

}
