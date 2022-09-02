//*
// Global Functions
//*
const globalFunc = (function() {
    "use strict";
    
    function ErrorDOMElement() {
        throw new Error('Missing DOM Element!');
    }

    function InvalidOperation(errorInput) {
        errorInput.textContent = 'Invalid operation!';
        throw new Error('Invalid Operation!');
    }

    function ErrorOperation(labelError, context) {
        labelError.innerHTML = context;
    }

    function HiddenElements(selector) {
        let collection = document.querySelectorAll(`${selector}`);
        if(collection == null) ErrorDOMElement;

        Array.from(collection).map(el => el.style.display = 'none');
    }

    function ClearInputs(selector) {
        let collection = document.querySelectorAll(`${selector}`);
        if(collection == null) ErrorDOMElement;

        Array.from(collection).map(el => el.value = '');
    }

    function RemoveZerosAfterDecimalPoint(num) {
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

    function CheckIsNumber(n) {
        return typeof Number(n) == 'number' && !isNaN(Number(n));
    }

    function CheckIsInteger(n) {
        return typeof Number(n) == 'number' && !isNaN(Number(n)) && Number(n) % 1 === 0;
    }

    function CheckIsFloat(n) {
        return typeof Number(n) == 'number' && !isNaN(Number(n)) && Number(n) % 1 !== 0;
    }

    function GetCode(clipboard, coppiedClipBoard, codeTag) {
        clipboard.style.display = 'none';
        coppiedClipBoard.style.display = 'block';
        navigator.clipboard.writeText(codeTag.textContent);
    }

    function ReturnClipboard(clipboard, coppiedClipBoard) {
        clipboard.style.display = 'block';
        coppiedClipBoard.style.display = 'none';
        navigator.clipboard.writeText('');
    }

    function mathTable(tBodyTag, tableData, delimiter) {
        if(tBodyTag == null || tableData == null)
            globalFunc.ErrorDomElement;
    
        for (const row of tableData) {
            const [left, right] = row.split(delimiter);
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${left}</td><td>${right}</td>`;
            tBodyTag.appendChild(tr);
        }
    }

    return {
        ErrorDOMElement,
        InvalidOperation,
        ErrorOperation,
        HiddenElements,
        ClearInputs,
        RemoveZerosAfterDecimalPoint,
        CheckIsNumber,
        CheckIsInteger,
        CheckIsFloat,
        GetCode,
        ReturnClipboard,
        mathTable
    }
})();

