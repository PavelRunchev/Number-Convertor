
//factorial
document.querySelector('.btn-factorial-calculate').addEventListener('click', factorial);
document.querySelector('.code-factorial').innerHTML = `<pre>${codeFactorial}</pre`;
let clipboard = document.querySelector('.clipboard-factorial');
let coppiedClipBoard = document.querySelector('.coppidClipboard-factorial');
let codeTagFactorial = document.querySelector('.code-factorial');

if(clipboard == null || coppiedClipBoard == null || codeTagFactorial == null)
    ErrorDomElement();

clipboard.addEventListener('click', getCodeFactorial);
coppiedClipBoard.addEventListener('click', returnClipboardFactorial);

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

    let fact = calcFactorial(Number(input.value));

    result.value = fact;
    input.value = '';
}

function calcFactorial(n) {
    let fact = 1;
    for (let i = 1; i < n; i++) { fact += fact * i; }

    return fact;
}


