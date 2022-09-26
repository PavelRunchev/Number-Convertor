//*
//fibonacci
//*
(function() {
    let btnCalculateFibonacci = document.querySelector('.btn-fibonacci-calculate');
    let codeFibonnaciContainer = document.querySelector('.code-fibonacci');
    let clipboardFibonacci = document.querySelector('.clipboard-fibonacci');
    let coppiedClipBoardFibonacci = document.querySelector('.coppidClipboard-fibonacci');
    let codeTagFibonacci = document.querySelector('.code-fibonacci');

    if(btnCalculateFibonacci == null || codeFibonnaciContainer == null || clipboardFibonacci == null 
        || coppiedClipBoardFibonacci == null || codeTagFibonacci == null)
        ErrorDomElement();

    clipboardFibonacci.addEventListener('click', getCodeFibonacci);
    coppiedClipBoardFibonacci.addEventListener('click', returnClipboardFibonacci);
    btnCalculateFibonacci.addEventListener('click', fibonacci);


    //set table fibonacci
    let tbodyFibonacci = document.querySelector('.tbody-fibonacci');
    //function fibonacciData is get from codeData.js
    globalFunc.mathTable(tbodyFibonacci, globalData.fibonacciData, ' ');
        
    function getCodeFibonacci(e) {
        e.preventDefault();
        globalFunc.GetCode(clipboardFibonacci, coppiedClipBoardFibonacci, codeTagFibonacci);
    }
        
    function returnClipboardFibonacci(e) {
        e.preventDefault();
        globalFunc.ReturnClipboard(clipboardFibonacci, coppiedClipBoardFibonacci);
    }

    function fibonacci(e) {
        let input = document.querySelector('.input-fibonacci-number');
        let result = document.querySelector('.input-fibonacci-result');

        if(input == null || result == null) {
            globalFunc.ErrorDomElement();
        }

        if(input.value == '' || !globalFunc.CheckIsNumber(input.value)) return;

        let n = Math.round(Number(input.value));
        function calcFibonacci(n) {
            if(n < 1) return 0;
            if(n < 3) return 1;

            let f0 = 0n, f1 = 1n;
            for (let i = 2; i <= n; i++) {
                let fn = BigInt(f0) + BigInt(f1);
                f0 = f1;
                f1 = fn;
            }

            return f1;
        }

        result.value = calcFibonacci(n);
    }

    //imported codeFibonacci from codeData.js!
    codeFibonnaciContainer.innerHTML = `<pre>${globalData.codeFibonacci}</pre`;

})(window);