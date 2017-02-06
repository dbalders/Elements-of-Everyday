function fluidBoxInit() {
    $('.home-lineup-container a')
        .on('openstart.fluidbox', function() {
            $('.home-button').hide();
        })
        .on('closestart.fluidbox', function() {
            $('.home-button').show();
        })
        .fluidbox({
            viewportFill: 0.8,
        });
}

function setCoverImage(coverImg, landscape) {
    if (landscape === true) {
        if (coverImg.height() <= 460) {
            coverImg.css('width', 'auto');
            coverImg.css('height', '100%');
        }
        if (coverImg.width() < $(window).width()) {
            coverImg.css('width', '100%');
            coverImg.css('height', 'auto');
        }
        if ($(window).width() < 500) {
            console.log(coverImg.height());
            console.log(coverImg.width());
            coverImg.css('margin-left', '-25%')
        } else {
            coverImg.css('margin-left', '0')
        }
    }
    if (coverImg.height() < 575) {
        coverImg.css('margin-top', '0');
    }
    if (coverImg.width() < ($(window).width() * 1.5)) {
        coverImg.css('margin-left', '0');
    }
    coverImg.show();
}