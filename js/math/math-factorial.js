//*
//factorial
//*

let btnCalculateFactorial = document.querySelector('.btn-factorial-calculate');
let codeFactorialContainer = document.querySelector('.code-factorial');

let clipboard = document.querySelector('.clipboard-factorial');
let coppiedClipBoard = document.querySelector('.coppidClipboard-factorial');
let codeTagFactorial = document.querySelector('.code-factorial');

if(btnCalculateFactorial == null || codeFactorialContainer == null || clipboard == null 
    || coppiedClipBoard == null || codeTagFactorial == null)
    ErrorDomElement();

clipboard.addEventListener('click', getCodeFactorial);
coppiedClipBoard.addEventListener('click', returnClipboardFactorial);
btnCalculateFactorial.addEventListener('click', factorial);

function getCodeFactorial(e) {
    e.preventDefault();
    coppiedClipBoard.style.display = 'block';
    clipboard.style.display = 'none';
    navigator.clipboard.writeText(codeTagFactorial.textContent);
}

function returnClipboardFactorial(e) {
    e.preventDefault();
    coppiedClipBoard.style.display = 'none';
    clipboard.style.display = 'block';
    navigator.clipboard.writeText('');
}

function factorial(e) {
    let input = document.querySelector('.input-factorial-number');
    let result = document.querySelector('.input-factorial-result');

    if(input == null || result == null) {
        throw new Error('Missing DOM Element!')
    }

    if(!checkIsNumber(input.value)) return;

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
codeFactorialContainer.innerHTML = `<pre>${codeFactorial}</pre`;


