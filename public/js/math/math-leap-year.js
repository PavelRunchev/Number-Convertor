//*
// Leap Year
//*
(function () {
    let parentContainer = document.querySelector('.leap-year-container');
    if(parentContainer == null)
        globalFunc.ErrorDOMElement();

    let codeLeapYearContainer = document.querySelector('.code-leap-year');

    let clipboardLeapYear = document.querySelector('.clipboard-leap-year');
    let coppiedClipBoardLeapYear = document.querySelector('.coppidClipboard-leap-year');
    let codeTagLeapYear = document.querySelector('.code-leap-year');
    if(clipboardLeapYear == null || coppiedClipBoardLeapYear == null || codeTagLeapYear == null)
        globalFunc.ErrorDOMElement();

    clipboardLeapYear.addEventListener('click', getCodeLeapYear);
    coppiedClipBoardLeapYear.addEventListener('click', returnClipboardLeapYear);
    function getCodeLeapYear(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.GetCode(clipboardLeapYear, coppiedClipBoardLeapYear, codeTagLeapYear);
    }
    
    function returnClipboardLeapYear(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.ReturnClipboard(clipboardLeapYear, coppiedClipBoardLeapYear);
    }


    let btnLeapYear = document.querySelector('.btn-leap-year');
    let inputLeapYear = document.querySelector('.input-leap-year');
    let resultLabelLeapYear = document.querySelector('.label-result-leap-year');
    btnLeapYear.addEventListener('click', calcLeapYear);

    function calcLeapYear() {
        if(btnLeapYear == null || inputLeapYear == null || resultLabelLeapYear == null)
        globalFunc.ErrorDOMElement();

        if(globalFunc.CheckIsInteger(inputLeapYear.value) && inputLeapYear.value.length == 4) {
            const year = inputLeapYear.value;
            const resultLeapYear = isLeap(year) 
                ? `Result: <span class="right">The year ${year} is Leap!</span>` 
                : `Result: <span class="invalid-leap">The year ${year} don't Leap!</span>`;

            resultLabelLeapYear.innerHTML = resultLeapYear;
            inputLeapYear.value = '';
        } else {
            resultLabelLeapYear.innerHTML = `Result: <span class="error">Invalid Year!</span>`;
        }
    }

    function isLeap(year) {
        return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    }

    //imported leapYearData from codeData.js!
    codeLeapYearContainer.innerHTML = `<pre>${globalData.leapYearData}</pre`;

})(window);