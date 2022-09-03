
const convert = (function() {
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
                hex = globalData.decimalToHexData[remainder] + hex;
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
            hex = globalData.binToHexData[binNumber] + hex;
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
                
            octal = globalData.binToOctalData[binNumber] + octal;
        }

        return Number(octal.replace(/^0+/, ''));
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
            decimalNumber += globalData.hexToDecimalData[num] * Math.pow(16, pow);
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
            bin += globalData.hexToBinaryData[hex] + ' ';
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

        return decimalNumber;
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
            binary += globalData.octalToBinaryData[num];
        }

        return binary;
    }

    function octalToHexadecimal(number) {
        const bin = octalToBinary(number);
        const hex = binaryToHexadecimal(bin);
        return hex;
    }

    return {
        decimalToDecimal,
        decimalToBinary,
        decimalToHexadecimal,
        decimalToOctal,
        binaryToDecimal,
        binaryToBinary,
        binaryToHexadecimal,
        binaryToOctal,
        hexadecimalToDecimal,
        hexadecimalToBinary,
        hexadecimalToHexadecimal,
        hexadecimalToOctal,
        octalToDecimal,
        octalToBinary,
        octalToHexadecimal,
        octalToOctal
    }
})();