window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

(function() {
    "use strict";
    
    let carouselCodeTag = document.querySelector('.code-carousel');
    let clipboardCarousel = document.querySelector('.clipboard-carousel');
    let coppiedClipBoardCarousel = document.querySelector('.coppidClipboard-carousel');

    if(carouselCodeTag == null || clipboardCarousel == null || coppiedClipBoardCarousel == null)
    globalFunc.ErrorDOMElement();

    //imported codeDistanceConvert from codeData.js!
    carouselCodeTag.innerText = `${globalData.carouselData}`;

    clipboardCarousel.addEventListener('click', getCodeCarousel);
    coppiedClipBoardCarousel.addEventListener('click', returnClipboardCarousel);

    function getCodeCarousel(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.GetCode(clipboardCarousel, coppiedClipBoardCarousel, carouselCodeTag);
    }

    function returnClipboardCarousel(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.ReturnClipboard(clipboardCarousel, coppiedClipBoardCarousel);
    }

    //
    // Lazy Load image
    //
    //img lazy load container scrolling by height
    let containerLazyLoad = document.querySelector('.container-lazy-load');
    containerLazyLoad.scroll(0, 0);
    containerLazyLoad.addEventListener('scroll', function() {
        containerLazyLoad.style.height = 1500;
    });

    //lazy load
    let img = document.querySelector('lazy-load');
    new LazyLoad(img);

})(window);


