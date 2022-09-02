
(function() {
    "use strict";
    
    let inputFieldCodeTag = document.querySelector('.code-input-field');
    let clipboardInputField = document.querySelector('.clipboard-input-field');
    let coppiedClipBoardInputField = document.querySelector('.coppidClipboard-input-field');

    if(inputFieldCodeTag == null || clipboardInputField == null || coppiedClipBoardInputField == null)
        globalFunc.ErrorDOMElement();

    //imported codeDistanceConvert from codeData.js!
    inputFieldCodeTag.innerText = `${globalData.inputFieldData}`;

    clipboardInputField.addEventListener('click', getCodeRange);
    coppiedClipBoardInputField.addEventListener('click', returnClipboardRange);

    function getCodeRange(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.GetCode(clipboardInputField, coppiedClipBoardInputField, inputFieldCodeTag);
    }

    function returnClipboardRange(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.ReturnClipboard(clipboardInputField, coppiedClipBoardInputField);
    }
})(window);