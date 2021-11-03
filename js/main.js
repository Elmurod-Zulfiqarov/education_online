
$(document).ready(function(){

    var owl = $(".owl-carousel");

    owl.owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        // autoplay: true,
        // autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
        },
    });

    owl.on('mousewheel', '.owl-stage', function (e) {
        console.log(e)
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

});

