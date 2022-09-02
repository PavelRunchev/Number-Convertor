
(function checkbox() {
    "use strict";
    
    let checkboxCodeTag = document.querySelector('.code-checkbox');
    let clipboardCheckbox = document.querySelector('.clipboard-checkbox');
    let coppiedClipBoardCheckbox = document.querySelector('.coppidClipboard-checkbox');

    if(checkboxCodeTag == null || clipboardCheckbox == null || coppiedClipBoardCheckbox == null)
        globalFunc.ErrorDOMElement();

    //imported codeDistanceConvert from codeData.js!
    checkboxCodeTag.innerText = `${globalData.checkboxData}`;

    clipboardCheckbox.addEventListener('click', getCodeRange);
    coppiedClipBoardCheckbox.addEventListener('click', returnClipboardRange);

    function getCodeRange(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.GetCode(clipboardCheckbox, coppiedClipBoardCheckbox, checkboxCodeTag);
    }

    function returnClipboardRange(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.ReturnClipboard(clipboardCheckbox, coppiedClipBoardCheckbox);
    }
})(window);
