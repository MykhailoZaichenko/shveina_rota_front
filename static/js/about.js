$(document).ready(function() {
    $('#mediaCarousel').on('slide.bs.carousel', function (e) {
        var $nextSlide = $(e.relatedTarget);
        var idx = $nextSlide.index();
        var itemsPerSlide = 3;
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems - itemsPerSlide) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                if (e.direction == "left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                } else {
                    $('.carousel-item').eq(totalItems - i - 1).prependTo('.carousel-inner');
                }
            }
        }
    });
});
