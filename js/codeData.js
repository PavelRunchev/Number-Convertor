//array with all text error.
const textError = [' Number is don`t integer!', ' Number must be only content ones and zeros!', 
' Number is don`t hexadecimal!', ' Number is don`t octal!'];
//objects data
const decimalToHexData = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'};
const binToHexData = { '0000': 0, '0001': 1, '0010': 2, '0011': 3, '0100': 4, 
'0101': 5, '0110': 6, '0111': 7, '1000': 8, '1001': 9, '1010': 'A',
'1011': 'B', '1100': 'C', '1101': 'D', '1110': 'E', '1111': 'F'
};
const hexToDecimalData = { 
'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, 
'6': 6, '7': 7, '8': 8, '9': 9, 'A': 10, 'B': 11, 
'C': 12, 'D': 13, 'E': 14, 'F': 15 
};

const hexToBinaryData = { 
'0': '0000', '1': '0001', '2': '0010', '3': '0011', 
'4': '0100', '5': '0101', '6': '0110', '7': '0111', 
'8': '1000', '9': '1001', 'A': '1010', 'B': '1011',
'C': '1100', 'D': '1101', 'E': '1110', 'F': '1111',
};

const binToOctalData = {
'000': 0, '001': 1, '010': 2, '011': 3, 
'100': 4, '101': 5, '110': 6, '111': 7
};
const octalToBinaryData = { 
'0': '000', '1': '001', '2': '010', '3': '011',
'4': '100', '5': '101', '6': '110', '7': '111'
};



const codeDecimalToDecimal = "public static string DecimalToDecimal(int number)\n{\n  return number;\n}";
const codeDecimalToBinary = 'public static string DecimalToBinary(int number)' +
    '\n{' +
    '\n  string bin = \"\"; int num = number;' +
    '\n  while(num > 0)' +
    '\n  {' +
    '\n     if (num % 2 == 0)' +
    '\n         bin = 0 + bin;' +
    '\n     else' +
    '\n         bin = 1 + bin;' +
    '\n     num = (int)Math.Floor((double)num / 2);' +
    '\n  }' +
    '\n  if (number == 0)' +
    '\n      return \"0\";' +
    '\n' +
    '\n   return bin;' +
    '\n}';

const codeDecimalToHexadecimal = 'public static string DecimalToHexadecimal(int number)' +
    '\n{' +
    '\n   string hex = \"\"; int num = number;' +
    '\n   while (num > 0)' +
    '\n   {' +
    '\n     int division = num / 16;' +
    '\n     int remainder = num % 16;' +
    '\n     if (remainder > 9 && remainder < 16)' +
    '\n         hex = decimalToHexData[remainder] + hex;' +
    '\n     else' +
    '\n         hex = remainder + hex;' +
    '\n     num = (int)Math.Floor((double)division);' +
    '\n    }' +
    '\n' +
    '\n    if (number == 0)' +
    '\n       return "0";' +
    '\n' +
    '\n   return hex;' +
    '\n}';

const codeDecimalToOctal = 'public static string DecimalToOctal(int number)' +
    '\n{' +
    '\n  string octal = ""; int num = number;' +
    '\n  while (num > 0)' +
    '\n  {' +
    '\n     int remainder = num % 8;' +
    '\n     octal = remainder + octal;' +
    '\n     num = (int)Math.Floor((double)num / 8);' +
    '\n  }' +
    '\n' +
    '\n  if(number == 0)' +
    '\n    return "0";' +
    '\n' +
    '\n  return octal;' +
    '\n}';

const codeBinaryToDecimal = 'public static int BinaryToDecimal(string number)' +
    '\n{' +
    '\n  int decimalSum = 0;' +
    '\n  char[] binaryArray = number.ToCharArray();' +
    '\n  int pow = binaryArray.Length - 1;' +
    '\n  foreach (char b in binaryArray)' + 
    '\n  {' +
    '\n     int result = (int)Math.Pow(2, pow) * (int)b;' +
    '\n     decimalSum += result;' +
    '\n     pow--;' +
    '\n  }' +
    '\n' +
    '\n  return decimalSum;' +
    '\n}';

const codeBinaryToHexadecimal = 'public static string BinaryToHexadecimal(string number)' +
    '\n{' +
    '\n   Dictionary<string, int> binToHexData = new Dictionary<string, int>()' +
    '\n   {' +
    '\n     { "0000", 0 }, {"0001", 1}, {"0010", 2}, {"0011", 3}, {"0100", 4}, {"0101", 5},' +
    '\n     {"0110", 6}, {"0111", 7}, {"1000", 8 }, {"1001", 9}, {"1010", "A" },' +
    '\n     {"1011", "B" }, {"1100", "C" }, {"1101", "D" }, {"1110", "E" }, {"1111", "F" }' +
    '\n   };' +
    '\n' +
    '\n  string hex = "";' +
    '\n  List<string> binaryList = number.ToCharArray().Select(e => e.ToString()).ToList();' +
    '\n' +
    '\n  if (binaryList.Count == 0)' +
    '\n     return "";' +
    '\n' +
    '\n  if (binaryList.All(x => x == "0"))' +
    '\n    return "0";' +
    '\n' +
    '\n  if (binaryList.Count == 3)' +
    '\n     binaryList.Insert(0, "0");' +
    '\n  else if (binaryList.Count == 2)' +
    '\n  {' +
    '\n     binaryList.Insert(0, "0");' +
    '\n     binaryList.Insert(0, "0");' +
    '\n   }' +
    '\n   else if (binaryList.Count == 1)' +
    '\n   {' +
    '\n     binaryList.Insert(0, "0");' +
    '\n     binaryList.Insert(0, "0");' +
    '\n     binaryList.Insert(0, "0");' +
    '\    }' +
    '\n' +
    '\n   while (binaryList.Count > 0)' +
    '\n   {' +
    '\n     string binNumber = String.Join("", binaryList.Take(4));' +
    '\n     binaryList.RemoveRange(0, 4);' +
    '\n     if (binaryList.Count == 3)' +
    '\n     {' +
    '\n        binaryList.Insert(0, "0");' +
    '\n     }' +
    '\n     else if (binaryList.Count == 2)' +
    '\n     {' +
    '\n        binaryList.Insert(0, "0");' +
    '\n        binaryList.Insert(0, "0");' +
    '\n     }' +
    '\n     else if (binaryList.Count == 1)' +
    '\n     {' +
    '\n        binaryList.Insert(0, "0");' +
    '\n        binaryList.Insert(0, "0");' +
    '\n        binaryList.Insert(0, "0");' +
    '\n     }' +
    '\n' +
    '\n     if(binNumber == "1010" || binNumber == "1011" || binNumber == "1100"' +
    '\n        || binNumber == "1101" || binNumber == "1110" || binNumber == "1111")' +
    '\n        hex = hex + (char)binToHexData[binNumber];' +
    '\n     else' +
    '\n        hex = hex + (int)binToHexData[binNumber];' +
    '\n   }' +
    '\n' +
    '\n   return hex;' +
    '\n}';

const codeBinaryToBinary = "public static string BinaryToBinary(string number)\n{\n  return number;\n}";
const codeHexadecimalToHexadecimal = "public static string HexadecimalToHexadecimal(string number)\n{\n  return number;\n}";
const codeOctalToOctal = "public static string OctalToOctal(int number)\n{\n  return number;\n}";




