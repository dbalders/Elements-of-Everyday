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
            //If the width of the cover image is less than 1.5 times width of the screen
            if (coverImg.width() < ($(window).width() * 1.5)) {
                coverImg.css('margin-left', '0');
            } else {
                coverImg.css('margin-left', '-25%')
            }
        } else {
            coverImg.css('margin-left', '0')
        }
    }

    if (landscape === false) {
        //If the height of the cover image is less than 1.5 times height of the image div
        if (coverImg.height() < 690) {
            coverImg.css('margin-top', '0');
        } else {
            coverImg.css('margin-top', '-25%');
        }
    }
    coverImg.show();
}
