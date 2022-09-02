//*
//factorial
//*
(function() {
    let btnCalculateFactorial = document.querySelector('.btn-factorial-calculate');
    let codeFactorialContainer = document.querySelector('.code-factorial');

    let clipboardFactorial = document.querySelector('.clipboard-factorial');
    let coppiedClipBoardFactorial = document.querySelector('.coppidClipboard-factorial');
    let codeTagFactorial = document.querySelector('.code-factorial');

    if(btnCalculateFactorial == null || codeFactorialContainer == null || clipboardFactorial == null 
        || coppiedClipBoardFactorial == null || codeTagFactorial == null)
        globalFunc.ErrorDomElement();

    clipboardFactorial.addEventListener('click', getCodeFactorial);
    coppiedClipBoardFactorial.addEventListener('click', returnClipboardFactorial);
    btnCalculateFactorial.addEventListener('click', factorial);

    function getCodeFactorial(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.GetCode(clipboardFactorial, coppiedClipBoardFactorial, codeTagFactorial);
    }

    function returnClipboardFactorial(e) {
        e.preventDefault();
        //imported function in global-function.js
        globalFunc.ReturnClipboard(clipboardFactorial, coppiedClipBoardFactorial);
    }

    //set table factorial
    let tbodyFactorial = document.querySelector('.tbody-factorial');
    //function factorialData is get from codeData.js
    globalFunc.mathTable(tbodyFactorial, globalData.factorialData, ' ');

    function factorial(e) {
        let input = document.querySelector('.input-factorial-number');
        let result = document.querySelector('.input-factorial-result');

        if(input == null || result == null) {
            globalFunc.ErrorDOMElement();
        }

        if(input.value == '' || !globalFunc.CheckIsNumber(input.value)) return;

        const val = Math.round(Number(input.value));
        let fact = calcFactorial(val);

        result.value = fact;
    }

    function calcFactorial(n) {
        let fact = 1;
        for (let i = 1; i < n; i++) { fact += fact * i; }

        return fact;
    }

    //imported codeFactorial from codeData.js!
    codeFactorialContainer.innerHTML = `<pre>${globalData.codeFactorial}</pre`;

})(window);


