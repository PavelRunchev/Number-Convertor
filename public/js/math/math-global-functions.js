//*
// Global Functions
//*

function ErrorDOMElement() {
    throw new Error('Missing DOM Element!');
}

function InvalidOperation() {
    errorInput.textContent = 'Invalid operation!';
    throw new Error('Invalid Operation!');
}

function hiddenElements(selector) {
    let collection = document.querySelectorAll(`${selector}`);
    if(collection == null) ErrorDOMElement;

    Array.from(collection).map(el => el.style.display = 'none');
}

function clearInputs(selector) {
    let collection = document.querySelectorAll(`${selector}`);
    if(collection == null) ErrorDOMElement;

    Array.from(collection).map(el => el.value = '');
}

function removeZerosAfterDecimalPoint(num) {
    let str = num;
    if(str.includes('.')) {
        while(str > 0) {
            if(str.endsWith('0')) 
                str = str.slice(0, -1);
            else if(str.endsWith('.')) {
                str = str.slice(0, -1);
                break;
            } else 
                break;
        }    
    }
   
    return str;
}

function checkIsNumber(n) {
    return typeof Number(n) == 'number' && !isNaN(Number(n));
}

function checkIsInteger(n) {
    return typeof Number(n) == 'number' && !isNaN(Number(n)) && Number(n) % 1 === 0;
}

function checkIsFloat(n) {
    return typeof Number(n) == 'number' && !isNaN(Number(n)) && Number(n) % 1 !== 0;
}

function getCode(clipboard, coppiedClipBoard, codeTag) {
    clipboard.style.display = 'none';
    coppiedClipBoard.style.display = 'block';
    navigator.clipboard.writeText(codeTag.textContent);
}

function returnClipboard(clipboard, coppiedClipBoard) {
    clipboard.style.display = 'block';
    coppiedClipBoard.style.display = 'none';
    navigator.clipboard.writeText('');
}

