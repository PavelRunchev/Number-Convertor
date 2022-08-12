//*
//fibonacci
//*

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
    
function getCodeFibonacci(e) {
    e.preventDefault();
    coppiedClipBoardFibonacci.style.display = 'block';
    clipboardFibonacci.style.display = 'none';
    navigator.clipboard.writeText(codeTagFibonacci.textContent);
}
    
function returnClipboardFibonacci(e) {
    e.preventDefault();
    coppiedClipBoardFibonacci.style.display = 'none';
    clipboardFibonacci.style.display = 'block';
    navigator.clipboard.writeText('');
}

function fibonacci(e) {
    let input = document.querySelector('.input-fibonacci-number');
    let result = document.querySelector('.input-fibonacci-result');

    if(input == null || result == null) {
        throw new Error('Missing DOM Element!')
    }

    if(!checkIsNumber(input.value)) return;

    const n = Math.round(Number(input.value));
    if(n < 1) {
        result.value = n;
        return;
    }
    
    let fn = n;
    let F0 = 0;
    let F1 = 1;

    for (let i = 2; i <= n; i++) {
        fn = F0 + F1;
        F0 = F1;
        F1 = fn;
    }

    result.value = F1;
}

//imported codeFibonacci from codeData.js!
codeFibonnaciContainer.innerHTML = `<pre>${codeFibonacci}</pre`;