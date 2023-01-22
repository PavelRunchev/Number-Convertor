
(function () {
    let parentExpContainer = document.querySelector('.exponential-function-container');
    if(parentExpContainer == null)
        globalFunc.ErrorDOMElement();

    let codeExpFuncContainer = document.querySelector('.code-exp-func');

    let clipboardExpFunc = document.querySelector('.clipboard-exp-func');
    let coppiedClipBoardExpFunc = document.querySelector('.coppidClipboard-exp-func');
    let codeTagExpFunc = document.querySelector('.code-exp-func');
    if(clipboardExpFunc == null || coppiedClipBoardExpFunc == null || codeTagExpFunc == null)
        globalFunc.ErrorDOMElement();

    clipboardExpFunc.addEventListener('click', getCodeExpFunc);
    coppiedClipBoardExpFunc.addEventListener('click', returnClipboardExpFunc);
    function getCodeExpFunc(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.GetCode(clipboardExpFunc, coppiedClipBoardExpFunc, codeTagExpFunc);
    }
    
    function returnClipboardExpFunc(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.ReturnClipboard(clipboardExpFunc, coppiedClipBoardExpFunc);
    }

    let btnExpFunc = document.querySelector('.btn-exp-func');
    let inputExpFunc = document.querySelector('.input-exp-func');
    let resultLabelExpFunc = document.querySelector('.label-result-exp-func');
    btnExpFunc.addEventListener('click', calcExpFunc);
    
    function calcExpFunc() {
        if(btnExpFunc == null || inputExpFunc == null || resultLabelExpFunc == null)
        globalFunc.ErrorDOMElement();

        if(globalFunc.CheckIsNumber(inputExpFunc.value)) {
            const result = calcExponential(Number(inputExpFunc.value));
            resultLabelExpFunc.innerHTML = `Result: ${globalFunc.RemoveZerosAfterDecimalPoint(result.toString())}`;
            inputExpFunc.value = '';
        } else {
            resultLabelExpFunc.innerHTML = `Result: <span class="error">Invalid Number!</span>`;
        }
    }

    function calcExponential(x) {
        let oldValue = 0, exp = 0, k = 0;
    
        let factorial = (k) => {
            let res = 1, count = 1;
            while( count <= k) {
                res = res * count;
                count++;
            }
        
            return res;
        }
    
        while(true) {
            exp += Math.pow(x, k) / factorial(k);
    
            if(exp == oldValue) break;
            else {
                oldValue = exp;
                k++;
            }
        }
    
        return exp.toFixed(14);
    }

    //imported leapYearData from codeData.js!
    codeExpFuncContainer.innerHTML = `<pre>${globalData.exponentialFunctionData}</pre`;
})(window);