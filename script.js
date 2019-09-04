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
   

    //SHowing Popup
    imgGallery.click(function () {
        videoSlider.addClass('hideSlider');
        imgSlider.removeClass('hideSlider');
        popup.toggleClass('hidePopup');
        popupContainer.toggleClass('hidePopup');
        // var title = $(this).attr("title");
        console.log(this.children);
    });

    videoGallery.click(function () {
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

    // console.log(imgBox[0].children);

})