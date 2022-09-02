
(function () {
    "use strict";
    
    let rangeCodeTag = document.querySelector('.code-range');
    let clipboardRange = document.querySelector('.clipboard-range');
    let coppiedClipBoardRange = document.querySelector('.coppidClipboard-range');

    if(rangeCodeTag == null || clipboardRange == null || coppiedClipBoardRange == null)
        globalFunc.ErrorDOMElement();

    //imported codeDistanceConvert from codeData.js!
    rangeCodeTag.innerText = `${globalData.rangeData}`;

    clipboardRange.addEventListener('click', getCodeRange);
    coppiedClipBoardRange.addEventListener('click', returnClipboardRange);

    function getCodeRange(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.GetCode(clipboardRange, coppiedClipBoardRange, rangeCodeTag);
    }

    function returnClipboardRange(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.ReturnClipboard(clipboardRange, coppiedClipBoardRange);
    }
})(window);