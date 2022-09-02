
(function() {
    "use strict";
    
    let toggleSwitchCodeTag = document.querySelector('.code-toggle-switch');
    let clipboardToggleSwitch = document.querySelector('.clipboard-toggle-switch');
    let coppiedClipBoardToggleSwitch= document.querySelector('.coppidClipboard-toggle-switch');

    if(toggleSwitchCodeTag == null || clipboardToggleSwitch == null || coppiedClipBoardToggleSwitch == null)
        globalFunc.ErrorDOMElement();

    //imported codeDistanceConvert from codeData.js!
    toggleSwitchCodeTag.innerText = `${globalData.toggleSwitchData}`;

    clipboardToggleSwitch.addEventListener('click', getCodeRange);
    coppiedClipBoardToggleSwitch.addEventListener('click', returnClipboardRange);

    function getCodeRange(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.GetCode(clipboardToggleSwitch, coppiedClipBoardToggleSwitch, toggleSwitchCodeTag);
    }

    function returnClipboardRange(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.ReturnClipboard(clipboardToggleSwitch, coppiedClipBoardToggleSwitch);
    }
})(window);