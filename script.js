$(function () {



    //Dom elements
    var popupContainer = $('.popup__container');
    var popup = $('.popup');
    var popupBg = $('.popup__bg');
    var close = $('.close');
    var imgGallery = $('.imgGallery');
    var imgSlider = $('.imgSlider');
    var videoSlider = $('.videoSlider');
    var videoGallery = $('.videoGallery');
    var prev = $('.prev');
    var next = $('.next');
    var sliderImg = $('.sliderImg');



    //Pref next functioning
    let counter = 0;
    prev.click(function () {
        if (counter > 0) {
            counter--;
        }
        var id = "#i" + (counter % 4);
        var id2 = "#v" + (counter % 4);
        manupulateSlider();
        $(id).css('opacity', '1');
        $(id2).css('opacity', '1');

    });
    next.click(function () {
        counter++;
        var id = "#i" + (counter % 4);
        var id2 = "#v" + (counter % 4);
        manupulateSlider();
        $(id).css('opacity', '1');
        $(id2).css('opacity', '1');

    });

    //Hiding all elements initially
    function manupulateSlider() {
        for (var i = 0; i < 4; i++) {
            sliderImg.css('opacity', '0');
        }
    }

    //SHowing Popup
    imgGallery.click(function () {

        var title = $(this).attr("title");
        var data = $(this).attr("data-serial");
        console.log(title);

        var id = "#i" + data;
        manupulateSlider();
        $(id).css('opacity', '1');

        videoSlider.addClass('hideSlider');
        imgSlider.removeClass('hideSlider');
        popup.toggleClass('hidePopup');
        popupContainer.toggleClass('hidePopup');

    });



    videoGallery.click(function () {
        var title = $(this).attr("title");
        var data = $(this).attr("data-serial");
        var id = "#v" + data;
        console.log(title);

        manupulateSlider();
        $(id).css('opacity', '1');

        imgSlider.addClass('hideSlider');
        videoSlider.removeClass('hideSlider');
        popup.toggleClass('hidePopup');
        popupContainer.toggleClass('hidePopup');
        // var title = $(this).attr("title");
    });


    //Closing Poopup
    close.click(function () {
        popup.toggleClass('hidePopup');
        popupContainer.toggleClass('hidePopup');
    });
    popupBg.click(function () {
        popup.toggleClass('hidePopup');
        popupContainer.toggleClass('hidePopup');
    });


})