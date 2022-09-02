
(function() {
    "use strict";
    
    function calculate() {
        //events
        document.querySelector('.btn-convert').addEventListener('click', mainConvert);
        document.querySelector('.btn-reset').addEventListener('click', reset);
        document.querySelector('.form-select-from').addEventListener('change', selectedFrom);
        document.querySelector('.form-select-to').addEventListener('change', selectedTo);
        document.querySelector('.feedback').addEventListener('click', sendFeedback);
        document.querySelector('.clipboard-csharp').addEventListener('click', clipboard);

        //all selectors
        let numberInput = document.querySelector('.input-number');
        let selectFrom = document.querySelector('.form-select-from');
        let selectTo = document.querySelector('.form-select-to');
        let result = document.querySelector('.input-result');
        let error = document.querySelector('.text-danger');
        let enterLabel = document.querySelector('.label-input-number');
        let labelResult = document.querySelector('.span-label-result');
        let spanResultNumber = document.querySelector('.span-result-number');
        let inputNumberSpan = document.querySelector('.span-input-number');
        let textAreaResult = document.querySelector('.text-area-result');
        let textAreaInputSpanNumber = document.querySelector('.text-area-number-span');
        let convertDescriptionFrom = document.querySelector('.convert-description-from');
        let convertDescriptionTo = document.querySelector('.convert-description-to');
        let codeTag = document.querySelector('.code-csharp');
        codeTag.innerHTML = `<pre>${globalData.codeDecimalToDecimal}</pre`;

        let spanConvertDecriptionTo = document.querySelector('.convert-description-to');

        if(numberInput == null || selectFrom == null || selectTo == null 
            || result == null || error == null || enterLabel == null || labelResult == null 
            || spanResultNumber == null || inputNumberSpan == null || textAreaResult == null
            || textAreaInputSpanNumber == null || convertDescriptionFrom == null
            || convertDescriptionTo == null || codeTag == null || spanConvertDecriptionTo == null) {
                globalFunc.ErrorDOMElement();
            } 

        function selectedFrom() {
            let labelInputNumber = document.querySelector('.label-input-number');
            let spanInputNumber = document.querySelector('.span-input-number');
            let spanConvertDecriptionFrom = document.querySelector('.convert-description-from');

            if(labelInputNumber == null || spanInputNumber == null || spanConvertDecriptionFrom == null) {
                globalFunc.ErrorDOMElement();
            }
            
            if(selectFrom.value == 'decimal') {
                changeLabelAndSpan(labelInputNumber, spanInputNumber, spanConvertDecriptionFrom, 'Decimal', 'Enter decimal number', 10, false);
            } else if(selectFrom.value == 'binary') {
                changeLabelAndSpan(labelInputNumber, spanInputNumber, spanConvertDecriptionFrom, 'Binary', 'Enter binary number', 2, false);
            } else if(selectFrom.value == 'hexadecimal') {
                changeLabelAndSpan(labelInputNumber, spanInputNumber, spanConvertDecriptionFrom, 'Hexadecimal', 'Enter hexadecimal number', 16, false);
            } else if(selectFrom.value == 'octal') {
                changeLabelAndSpan(labelInputNumber, spanInputNumber, spanConvertDecriptionFrom, 'Octal', 'Enter octal number', 8, false);
            }
        }

        function selectedTo() {
            if(selectTo.value == 'decimal') {
                changeLabelAndSpan(labelResult, spanResultNumber, spanConvertDecriptionTo, 'Decimal', 'Decimal number', 10, true);
            } else if(selectTo.value == 'binary') {
                changeLabelAndSpan(labelResult, spanResultNumber, spanConvertDecriptionTo, 'Binary', 'Binary number', 2, true);
            } else if(selectTo.value == 'hexadecimal') {
                changeLabelAndSpan(labelResult, spanResultNumber, spanConvertDecriptionTo, 'Hexadecimal', 'Hexadecimal number', 16, true);
            } else if(selectTo.value == 'octal') {
                changeLabelAndSpan(labelResult, spanResultNumber, spanConvertDecriptionTo, 'Octal', 'Octal number', 8, true);
            }
        }

        function changeLabelAndSpan(label, span, spanDescription, descriptionContent, labelContent, spanContent, isTo) {
            //hidden all convert description
            document.querySelectorAll('.convert-container > section')
                .forEach(el => el.style.display = 'none');

            if(isTo) {
                label.innerHTML = labelContent;
                spanResultNumber.textContent = spanContent;
                textAreaInputSpanNumber.textContent = spanContent;
                spanDescription.textContent = descriptionContent;
            } else {
                label.textContent = labelContent;
                span.textContent = spanContent;
                spanDescription.textContent = descriptionContent;
            }

            if(selectFrom.value == null || selectTo.value == null) return;

            //show curent description selcted curent conversion
            if(selectFrom.value == "decimal" && selectTo.value == "decimal") {
                document.querySelector('.convert-decimal-to-decimal').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeDecimalToDecimal}</pre`;
            } else if(selectFrom.value == "decimal" && selectTo.value == "binary") {
                document.querySelector('.convert-decimal-to-binary').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeDecimalToBinary}</pre`;
            } else if(selectFrom.value == "decimal" && selectTo.value == "hexadecimal") {
                document.querySelector('.convert-decimal-to-hexadecimal').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeDecimalToHexadecimal}</pre`;
            } else if(selectFrom.value == "decimal" && selectTo.value == "octal") {
                document.querySelector('.convert-decimal-to-octal').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeDecimalToOctal}</pre`;
            } else if(selectFrom.value == "binary" && selectTo.value == "decimal") {
                document.querySelector('.convert-binary-to-decimal').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeBinaryToDecimal}</pre`;
            } else if(selectFrom.value == "binary" && selectTo.value == "binary") {
                document.querySelector('.convert-binary-to-binary').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeBinaryToBinary}</pre`;
            } else if(selectFrom.value == "binary" && selectTo.value == "hexadecimal") {
                document.querySelector('.convert-binary-to-hexadecimal').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeBinaryToHexadecimal}</pre`;
            } else if(selectFrom.value == "binary" && selectTo.value == "octal") {
                document.querySelector('.convert-binary-to-octal').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeBinaryToOctal}</pre`;
            } else if(selectFrom.value == "hexadecimal" && selectTo.value == "decimal") {
                document.querySelector('.convert-hexadecimal-to-decimal').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeHexadecimalToDecimal}</pre`;
            } else if(selectFrom.value == "hexadecimal" && selectTo.value == "binary") {
                document.querySelector('.convert-hexadecimal-to-binary').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeHexadecimalToBinary}</pre`;
            } else if(selectFrom.value == "hexadecimal" && selectTo.value == "hexadecimal") {
                document.querySelector('.convert-hexadecimal-to-hexadecimal').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeHexadecimalToHexadecimal}</pre`;
            } else if(selectFrom.value == "hexadecimal" && selectTo.value == "octal") {
                document.querySelector('.convert-hexadecimal-to-octal').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeHexadecimalToOctal}</pre`;
            } else if(selectFrom.value == "octal" && selectTo.value == "decimal") {
                document.querySelector('.convert-octal-to-decimal').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeOctalToDecimal}</pre`;
            } else if(selectFrom.value == "octal" && selectTo.value == "binary") {
                document.querySelector('.convert-octal-to-binary').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeOctalToBinary}</pre`;
            } else if(selectFrom.value == "octal" && selectTo.value == "hexadecimal") {
                document.querySelector('.convert-octal-to-hexadecimal').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeOctalToHexadecimal}</pre`;
            } else if(selectFrom.value == "octal" && selectTo.value == "octal") {
                document.querySelector('.convert-octal-to-octal').style.display = 'block';
                codeTag.innerHTML = `<pre>${globalData.codeOctalToOctal}</pre`;
            }
        }
    
        function mainConvert() {
            const from = selectFrom.value;
            const to = selectTo.value;

            if(from == null || to == null) {
                globalFunc.ErrorDOMElement();
            }
            
            let isConverted = '';
            if(from == 'decimal' && to == 'decimal') {
                isConverted = convertIt(Number(numberInput.value), decimalToDecimal, Number.isInteger, globalData.textError[0]);
            } else if(from == 'decimal' && to == 'binary') {
                isConverted = convertIt(Number(numberInput.value), decimalToBinary, Number.isInteger, globalData.textError[0]);
            } else if(from == 'decimal' && to == 'hexadecimal') {
                isConverted = convertIt(Number(numberInput.value), decimalToHexadecimal, Number.isInteger, globalData.textError[0]);
            } else if(from == 'decimal' && to == 'octal')   {
                isConverted = convertIt(Number(numberInput.value), decimalToOctal, Number.isInteger, globalData.textError[0]);
            }  else if(from == 'binary' && to == 'binary') {
                isConverted = convertIt(numberInput.value, binaryToBinary, checkInputIsBinary, globalData.textError[1]);
            } else if(from == 'binary' && to == 'decimal') {
                isConverted = convertIt(numberInput.value, binaryToDecimal, checkInputIsBinary, globalData.textError[1]);
            } else if(from == 'binary' && to == 'hexadecimal') {
                isConverted = convertIt(numberInput.value, binaryToHexadecimal, checkInputIsBinary, globalData.textError[1]);
            } else if(from == 'binary' && to == 'octal') {
                isConverted = convertIt(numberInput.value, binaryToOctal, checkInputIsBinary, globalData.textError[1]);
            } else if(from == 'hexadecimal' && to == 'hexadecimal') {
                isConverted = convertIt(numberInput.value, hexadecimalToHexadecimal, checkInputIsHexadecimal, globalData.textError[2]);
            } else if(from == 'hexadecimal' && to == 'decimal') {
                isConverted = convertIt(numberInput.value, hexadecimalToDecimal, checkInputIsHexadecimal, globalData.textError[2]);
            } else if(from == 'hexadecimal' && to == 'binary') {
                isConverted = convertIt(numberInput.value, hexadecimalToBinary, checkInputIsHexadecimal, globalData.textError[2]);
            } else if(from == 'hexadecimal' && to == 'octal') {
                isConverted = convertIt(numberInput.value, hexadecimalToOctal, checkInputIsHexadecimal, globalData.textError[2]);
            } else if(from == 'octal' && to == 'octal') {
                isConverted = convertIt(Number(numberInput.value), octalToOctal, Number.isInteger, globalData.textError[3]);
            } else if(from == 'octal' && to == 'decimal') {
                isConverted = convertIt(Number(numberInput.value), octalToDecimal, Number.isInteger, globalData.textError[3]);
            } else if(from == 'octal' && to == 'binary') {
                isConverted = convertIt(Number(numberInput.value), octalToBinary, Number.isInteger, globalData.textError[3]);
            } else if(from == 'octal' && to == 'hexadecimal') {
                isConverted = convertIt(Number(numberInput.value), octalToHexadecimal, Number.isInteger, globalData.textError[3]);
            }

            //result show output
            if(isConverted != undefined) {
                result.value = isConverted;
                textAreaResult.value = isConverted;
            }   
        }

        function convertIt(number, func, checkFunc, errorContent) {   
            if(checkFunc(number)) {
                return func(number);
            } else {
                labelResult.textContent = 'Result:';
                error.textContent = errorContent;
                labelResult.appendChild(error);
            }    
        }

        function decimalToDecimal(number) {
            return number;
        }

        function decimalToBinary(number) {
            let num = number, binaryNumber = '';
            while(num > 0) {
                if(num % 2 == 0) binaryNumber = 0 + binaryNumber;
                else binaryNumber = 1 + binaryNumber;
                num = Math.floor(num / 2);
            }

            if(number == 0)
                return '0';

            return binaryNumber;
        }

        function decimalToHexadecimal (number) {
            let hex = '';
            let num = number;
            while(num > 0) {
                const division = num / 16;
                let remainder = num % 16;
                if(remainder > 9 && remainder < 16)
                    hex = decimalToHexData[remainder] + hex;
                else
                    hex = remainder + hex;
                num = Math.floor(division);
            }

            if(number == 0)
                return '0';

            return hex;
        }

        function decimalToOctal(number) {
            let octal = '';
            let num = number;
            while(num > 0) {
                const remainder = num % 8;
                octal = remainder + octal;
                num = Math.floor(num / 8);
            }

            if(number == 0)
                return '0';

            return octal;
        }

        function checkInputIsBinary(number) {
            return [...number].every(e => Number(e) == 0 || Number(e) == 1);
        }

        function binaryToBinary(number) {
            return number;
        }

        function binaryToDecimal(number) {
            let decimalSum = 0;
            let binaryArray = [...number];
            let pow = binaryArray.length - 1;
            for (const b of binaryArray) {
                const result = Math.pow(2, pow) * Number(b);
                decimalSum += result;
                //lessening pow
                pow--;
            }

            return decimalSum;
        }

        function binaryToHexadecimal(number) {       
            let hex = '';
            let binaryArray = [...number];

            if(binaryArray.length == 0)
                return '';

            if(binaryArray.every(e => e == 0))
                return '0000';

            //garant binary number is allways 4 digits!
            if(binaryArray.length == 3)
                binaryArray.unshift('0');
            else if(binaryArray.length == 2) {
                binaryArray.unshift('0');
                binaryArray.shift('0');
            } else if(binaryArray.length == 1) {
                binaryArray.unshift('0');
                binaryArray.unshift('0');
                binaryArray.unshift('0');
            }

            while(binaryArray.length > 0) {
                let binNumber = binaryArray.splice(binaryArray.length - 4, 4).join('');
                if(binaryArray.length == 3) {
                    binaryArray.unshift('0');
                } else if(binaryArray.length == 2) {
                    binaryArray.unshift('0');
                    binaryArray.unshift('0');
                } else if(binaryArray.length == 1) {
                    binaryArray.unshift('0');
                    binaryArray.unshift('0');
                    binaryArray.unshift('0');
                }
                hex = binToHexData[binNumber] + hex;
            }
            
            //trim before hex number!
            return hex.replace(/^0+/, '');
        }

        function binaryToOctal(number) {
            if([...number].every(e => e == 0)) 
                return '0';

            let octal = '';
            let binaryArray = [...number].filter(el => el != ' ');
            while(binaryArray.length > 0) {
                let binNumber = binaryArray.splice(binaryArray.length - 3, 3).join('');

                if(binaryArray.length == 2) 
                    binaryArray.unshift('0');
                else if(binaryArray.length == 1) {
                    binaryArray.unshift('0');
                    binaryArray.unshift('0');
                }
                    
                octal = binToOctalData[binNumber] + octal;
            }

            return octal.replace(/^0+/, '');
        }

        function checkInputIsHexadecimal(number) {
            const hexNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
            return [...number].every(h => hexNumbers.some(e => h.toUpperCase() == e));
        }

        function hexadecimalToHexadecimal(number) {
            return number.toUpperCase();
        }

        function hexadecimalToDecimal(number) {
            let decimalNumber = 0; 
            let hexadecimalArray = [...number].map(e => e.toUpperCase());
            let pow = hexadecimalArray.length - 1;
            while(hexadecimalArray.length > 0) {
                const num = hexadecimalArray.shift();
                decimalNumber += hexToDecimalData[num] * Math.pow(16, pow);
                pow--;
            }

            return decimalNumber;
        }

        function hexadecimalToBinary(number) {
            if([...number].every(e => e == 0)) 
                return '0000';

            let bin = '';
            let hexArray = [...number];
            while(hexArray.length > 0) {
                const hex = hexArray.shift().toUpperCase();
                bin += hexToBinaryData[hex] + ' ';
            }

            return bin.trim();
        }

        function hexadecimalToOctal(number) {
            const binNumber = hexadecimalToBinary(number);
            const octalNumber = binaryToOctal(binNumber);
            return octalNumber;
        }

        function octalToOctal(number) {
            return number.toString();
        }

        function octalToDecimal(number) {
            let decimalNumber = 0;
            let octalArray = [...number.toString()];
            let pow = octalArray.length - 1;
            while(octalArray.length > 0) {
                const num = octalArray.shift();
                decimalNumber += Number(num) * Math.pow(8, pow);
                pow--;
            }

            return decimalNumber.toString();
        }

        function octalToBinary(number) {
            let binary = '';
            let octalArray = [...number.toString()];

            if(octalArray.every(e => e == 0))
                return '000';

            if(octalArray.some(e => e == '8' || e == '9'))
                return '';

            while(octalArray.length > 0) {
                const num = octalArray.shift();
                binary += octalToBinaryData[num];
            }

            return binary;
        }

        function octalToHexadecimal(number) {
            const bin = octalToBinary(number);
            const hex = binaryToHexadecimal(bin);
            return hex;
        }

        function reset() {
            document.querySelectorAll('.convert-container > section')
                .forEach(el => el.style.display = 'none');

            numberInput.value = '';
            result.value = '';
            textAreaResult.value = '';
            selectFrom.value = 'decimal';
            selectTo.value = 'decimal';
            error.textContent = '';

            spanResultNumber.textContent = 10;
            textAreaInputSpanNumber.textContent = 10;
            inputNumberSpan.textContent = 10;

            enterLabel.innerHTML = 'Enter decimal number';
            labelResult.innerHTML = 'Decimal number';

            convertDescriptionFrom.textContent = 'Decimal';
            convertDescriptionTo.textContent = 'Decimal';
            document.querySelector('.convert-decimal-to-decimal').style.display = 'block';
            codeTag.innerHTML = `<pre>${globalData.codeDecimalToDecimal}</pre`;
        }

        function clipboard(e) {
            e.preventDefault();
            navigator.clipboard.writeText(codeTag.textContent);
        }

        function sendFeedback(e) {
            e.preventDefault();
            let message = document.querySelector('.text-area-feedback');
            if(message == null) {
                globalFunc.ErrorDOMElement();
            }

            message.value = '';
        }
    }

    calculate();

})(window);