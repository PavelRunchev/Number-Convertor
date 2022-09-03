
let assert = chai.assert;
let expect  = chai.expect;

//
//testing from global function
//
describe("Testing global function Missing DOM element", function() {
    it("Should error that missing DOM element", function() {
        expect(globalFunc.ErrorDOMElement).to.throw(Error, "Missing DOM Element!");
    });

    it("Should error that missing DOM element with assert", function() {
        assert.throw(globalFunc.ErrorDOMElement, "Missing DOM Element!");
    });
});

describe("Testing function CheckIsNumber", function() {
    it("should return true that correct number", function() {
        assert.equal(globalFunc.CheckIsNumber(-2), true);
    });

    it("should return false that incorrect number", function() {
        expect(globalFunc.CheckIsNumber('r')).to.equal(false);
    });
  
});

describe("Testing function CheckIsInteger", function() {
    it("should return true that correct integer", function() {
        assert.equal(globalFunc.CheckIsInteger(0), true);
    });

    it("should return false that incorrect number", function() {
        expect(globalFunc.CheckIsInteger(2.33)).to.equal(false);
    });
});

describe("Testing function CheckIsFloat", function() {
    it("should return true that correct integer", function() {
        assert.equal(globalFunc.CheckIsFloat(0.55), true);
    });

    it("should return false that incorrect number", function() {
        expect(globalFunc.CheckIsFloat(-1)).to.equal(false);
    });
});

//
//testing that number convert functionality from index.html
//
describe("Testing function decimalToBinary", function() {
    it("should return correct binary result that integer five", function() {
        assert.equal(convert.decimalToBinary(5), '101');
    });

    it("should return correct binary result that zero", function() {
        expect(convert.decimalToBinary(0)).to.equal('0');
    });
});

describe("Testing function decimalToHexadecimal", function() {
    it("should return correct hex result that integer 12 -> C", function() {
        assert.equal(convert.decimalToHexadecimal(12), 'C');
    });

    it("should return correct hex result that integer 35631 -> 8B2F", function() {
        expect(convert.decimalToHexadecimal(35631)).to.equal('8B2F');
    });
});

describe("Testing function binaryToDecimal", function() {
    it("should return correct decimal result that bin 1110 -> 14", function() {
        assert.equal(convert.binaryToDecimal('1110'), 14);
    });

    it("should return correct decimal result that bin 00111000 -> 56", function() {
        expect(convert.binaryToDecimal('00111000')).to.equal(56);
    });
});

describe("Testing function binaryTohexadecimal", function() {
    it("should return correct hex result that bin 1101100 -> 6C", function() {
        assert.equal(convert.binaryToHexadecimal('1101100'), '6C');
    });

    it("should return correct hex result that bin 0111 -> 7", function() {
        expect(convert.binaryToHexadecimal('0111')).to.equal('7');
    });
});

describe("Testing function binaryToOctal", function() {
    it("should return correct octal result that bin 1101100 -> 154", function() {
        assert.equal(convert.binaryToOctal('1101100'), 154);
    });

    it("should return correct octal result that bin 0111 -> 7", function() {
        expect(convert.binaryToOctal('0111')).to.equal(7);
    });
});

describe("Testing function hexadecimalToDecimal", function() {
    it("should return correct decimal result that hex 6C -> 108", function() {
        assert.equal(convert.hexadecimalToDecimal('6C'), 108);
    });

    it("should return correct decimal result that hex 3A2B -> 14891", function() {
        expect(convert.hexadecimalToDecimal('3A2B')).to.equal(14891);
    });
});

describe("Testing function hexadecimalToBinary", function() {
    it("should return correct bin result that hex 6C -> 0110 1100", function() {
        assert.equal(convert.hexadecimalToBinary('6C'), '0110 1100');
    });

    it("should return correct bin result that hex 3A2B -> 0011101000101011", function() {
        expect(convert.hexadecimalToBinary('3A2B')).to.equal('0011 1010 0010 1011');
    });
});

describe("Testing function hexadecimalToOctal", function() {
    it("should return correct octal result that hex 6C -> 154", function() {
        assert.equal(convert.hexadecimalToOctal('6C'), 154);
    });

    it("should return correct octal result that hex 3A2B -> 35053", function() {
        expect(convert.hexadecimalToOctal('3A2B')).to.equal(35053);
    });
});

describe("Testing function octalToDecimal", function() {
    it("should return correct decimal result that octal 32 -> 26", function() {
        assert.equal(convert.octalToDecimal(32), 26);
    });

    it("should return correct decimal result that octal 60 -> 48", function() {
        expect(convert.octalToDecimal(60)).to.equal(48);
    });
});

describe("Testing function octalToBinary", function() {
    it("should return correct bin result that octal 32 -> 011010", function() {
        assert.equal(convert.octalToBinary(32), '011010');
    });

    it("should return correct bin result that octal 60 -> 110000", function() {
        expect(convert.octalToBinary(60)).to.equal('110000');
    });
});

describe("Testing function octalToHexadecimal", function() {
    it("should return correct hex result that octal 32 -> 1A", function() {
        assert.equal(convert.octalToHexadecimal(32), '1A');
    });

    it("should return correct hex result that octal 60 -> 30", function() {
        expect(convert.octalToHexadecimal(60)).to.equal('30');
    });
});