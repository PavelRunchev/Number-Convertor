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
    '\n  string octal = \"\"; int num = number;' +
    '\n  while (num > 0)' +
    '\n  {' +
    '\n     int remainder = num % 8;' +
    '\n     octal = remainder + octal;' +
    '\n     num = (int)Math.Floor((double)num / 8);' +
    '\n  }' +
    '\n' +
    '\n  if(number == 0)' +
    '\n    return \"0\";' +
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

const codeBinaryToBinary = "public static string BinaryToBinary(string number)\n{\n  return number;\n}";

const codeBinaryToHexadecimal = 'public static string BinaryToHexadecimal(string number)' +
    '\n{' +
    '\n   Dictionary&lt;string, int&gt; binToHexData = new Dictionary&lt;string, int&gt;()' +
    '\n   {' +
    '\n     { "0000", 0 }, {"0001", 1}, {"0010", 2}, {"0011", 3}, {"0100", 4}, {"0101", 5},' +
    '\n     {"0110", 6}, {"0111", 7}, {"1000", 8 }, {"1001", 9}, {"1010", "A" },' +
    '\n     {"1011", "B" }, {"1100", "C" }, {"1101", "D" }, {"1110", "E" }, {"1111", "F" }' +
    '\n   };' +
    '\n' +
    '\n  string hex = \"\";' +
    '\n  List&lt;string&gt; binaryList = number.ToCharArray().Select(e => e.ToString()).ToList();' +
    '\n' +
    '\n  if (binaryList.Count == 0)' +
    '\n     return \"\";' +
    '\n' +
    '\n  if (binaryList.All(x => x == \"0\"))' +
    '\n    return \"0\";' +
    '\n' +
    '\n  if (binaryList.Count == 3)' +
    '\n     binaryList.Insert(0, \"0\");' +
    '\n  else if (binaryList.Count == 2)' +
    '\n  {' +
    '\n     binaryList.Insert(0, \"0\");' +
    '\n     binaryList.Insert(0, \"0\");' +
    '\n   }' +
    '\n   else if (binaryList.Count == 1)' +
    '\n   {' +
    '\n     binaryList.Insert(0, \"0\");' +
    '\n     binaryList.Insert(0, \"0\");' +
    '\n     binaryList.Insert(0, \"0\");' +
    '\    }' +
    '\n' +
    '\n   while (binaryList.Count > 0)' +
    '\n   {' +
    '\n     string binNumber = String.Join(\"\", binaryList.Take(4));' +
    '\n     binaryList.RemoveRange(0, 4);' +
    '\n     if (binaryList.Count == 3)' +
    '\n     {' +
    '\n        binaryList.Insert(0, \"0\");' +
    '\n     }' +
    '\n     else if (binaryList.Count == 2)' +
    '\n     {' +
    '\n        binaryList.Insert(0, \"0\");' +
    '\n        binaryList.Insert(0, \"0\");' +
    '\n     }' +
    '\n     else if (binaryList.Count == 1)' +
    '\n     {' +
    '\n        binaryList.Insert(0, \"0\");' +
    '\n        binaryList.Insert(0, \"0\");' +
    '\n        binaryList.Insert(0, \"0\");' +
    '\n     }' +
    '\n' +
    '\n     if(binNumber == \"1010\" || binNumber == \"1011\" || binNumber == \"1100\"' +
    '\n        || binNumber == \"1101\" || binNumber == \"1110\" || binNumber == \"1111\")' +
    '\n        hex = hex + (char)binToHexData[binNumber];' +
    '\n     else' +
    '\n        hex = hex + (int)binToHexData[binNumber];' +
    '\n   }' +
    '\n' +
    '\n   return hex;' +
    '\n}';

const codeBinaryToOctal = 'public static string BinaryToOctal(string number)' +
    '\n{' +
    '\n     Dictionary&lt;string, int&gt; binToOctalData = new Dictionary&lt;string, int&gt;()' +
    '\n     {' +
    '\n         {"000", 0 }, {"001", 1 }, {"010", 2 }, {"011", 3 },' +
    '\n         {"100", 4 }, {"101", 5 }, {"110", 6 }, {"111", 7 }' +
    '\n     };' +
    '\n     string octal = \"\";' +
    '\n     List&lt;string&gt; binaryList = number.ToCharArray().Select(e => e.ToString()).ToList();' +
    '\n     if (binaryList.Count == 0)' +
    '\n        return \"\";' +
    '\n     if (binaryList.All(x => x == \"0\"))' +
    '\n        return \"0\";' +
    '\n' +
    '\n     while (binaryList.Count > 0)' +
    '\n     {' +
    '\n         string binNumber = String.Join(\"\", binaryList.Take(3));' +
    '\n         binaryList.RemoveRange(0, 3);' +
    '\n         if (binaryList.Count == 2)' +
    '\n             binaryList.Insert(0, \"0\");' +
    '\n         else if (binaryList.Count == 1)' +
    '\n         {' +
    '\n             binaryList.Insert(0, \"0\");' +
    '\n             binaryList.Insert(0, \"0\");' +
    '\n         }' +
    '\n' +
    '\n         octal =  octal + binToOctalData[binNumber];' +
    '\n      }' +
    '\n' +
    '\n      return octal;' +
    '\n}';

const codeHexadecimalToDecimal = 'public static string HexadecimalToDecimal(string number)' +
    '\n{' +
    '\n     Dictionary&lt;string, int&gt; hexToDecimalData = new Dictionary&lt;string, int&gt;()' +
    '\n     {' +
    '\n         {"0", 0 }, {"1", 1 }, {"2", 2 }, {"3", 3 }, {"4", 4 },' +
    '\n         {"5", 5 }, {"6", 6 }, {"7", 7 }, {"8", 8 }, {"9", 9 },' + 
    '\n         {"A", 10 }, {"B", 11 }, {"C", 12 }, {"D", 13 },' +
    '\n         {"E", 14 }, {"F", 15 }' +
    '\n     };' +
    '\n' +
    '\n     int decimalNumber = 0;' +
    '\n     List&lt;string&gt; hexadecimalList = number.ToCharArray()' +
    '\n         .Select(e => e.ToString().ToUpper()).ToList();' +
    '\n     int pow = hexadecimalList.Count - 1;' +
    '\n     while (hexadecimalList.Count > 0)' +
    '\n     {' +
    '\n         string num = String.Join(\"\", hexadecimalList.Take(1));' +
    '\n         hexadecimalList.RemoveRange(0, 1);' +
    '\n         decimalNumber += hexToDecimalData[num] * (int)Math.Pow(16, pow);' +
    '\n         pow--;' +
    '\n     }' +
    '\n' +
    '\n     return decimalNumber.ToString();' +
    '\n}';

const codeHexadecimalToBinary = 'public static string HexadecimalToBinary(string number)' + 
    '\n{' +
    '\n    Dictionary&lt;string, string&gt; hexToBinaryData = new Dictionary&lt;string, string&gt;()' +
    '\n    {' +
    '\n         { "0", "0000" }, {"1", "0001" }, {"2", "0010"}, {"3", "0011"},' +
    '\n         {"4", "0100"}, {"5", "0101" }, {"6", "0110"}, {"7", "0111"},' +
    '\n         {"8", "1000"}, {"9", "1001"}, {"A", "1010"}, {"B", "1011"},' +
    '\n         {"C", "1100"}, {"D", "1101"}, {"E", "1110"}, {"F", "1111"},' +
    '\n    };' +
    '\n' +
    '\n    List&lt;string&gt; hexList = number.ToCharArray()' +
    '\n        .Select(e => e.ToString().ToUpper()).ToList();' +
    '\n    if (hexList.All(x => x == \"0\"))' +
    '\n        return \"0000\";' +
    '\n' +
    '\n    string bin = \"\";' +
    '\n    while (hexList.Count > 0)' +
    '\n    {' +
    '\n        string hex = String.Join(\"\", hexList.Take(1));' +
    '\n        hexList.RemoveRange(0, 1);' +
    '\n        bin += hexToBinaryData[hex] + \" \";' +
    '\n    }' +
    '\n' +
    '\n    return bin.Trim();' +
    '\n}';

const codeHexadecimalToHexadecimal = 'public static string HexadecimalToHexadecimal(string number)\n{\n  return number.ToUpper().Trim();\n}';

const codeHexadecimalToOctal = 'public static string HexadecimalToOctal(string number)' +
    '\n{' +
    '\n     Dictionary&lt;string, string&gt; hexToBinaryData = new Dictionary&lt;string, string&gt;()' +
    '\n     {' +
    '\n         { "0", "0000" }, {"1", "0001" }, {"2", "0010"}, {"3", "0011"},' +
    '\n         {"4", "0100"}, {"5", "0101" }, {"6", "0110"}, {"7", "0111"},' +
    '\n         {"8", "1000"}, {"9", "1001"}, {"A", "1010"}, {"B", "1011"},' +
    '\n         {"C", "1100"}, {"D", "1101"}, {"E", "1110"}, {"F", "1111"},' +
    '\n     };' +
    '\n' +
    '\n     Dictionary&lt;string, int&gt; binToOctalData = new Dictionary&lt;string, int&gt;()' +
    '\n     {' +
    '\n         {"000", 0 }, {"001", 1 }, {"010", 2 }, {"011", 3 },' +
    '\n         {"100", 4 }, {"101", 5 }, {"110", 6 }, {"111", 7 }' +
    '\n     };' +
    '\n' +
    '\n     List&lt;string&gt; hexList = number.ToCharArray()' +
    '\n         .Select(e => e.ToString().ToUpper()).ToList();' +
    '\n     if (hexList.All(x => x == "0"))' +
    '\n         return \"0000\";' +
    '\n' +
    '\n     string bin = \"\";' +
    '\n     while (hexList.Count > 0)' +
    '\n     {' +
    '\n         string hex = String.Join(\"\", hexList.Take(1));' +
    '\n         hexList.RemoveRange(0, 1);' +
    '\n         bin += hexToBinaryData[hex] + " ";' +
    '\n     }' +
    '\n' +
    '\n     string octal = \"\";' +
    '\n     List&lt;string&gt; binaryList = bin.Trim().ToCharArray()' +
    '\n        .Select(e => e.ToString()).ToList();' +
    '\n     if (binaryList.Count == 0)' +
    '\n         return \"\";' +
    '\n     if (binaryList.All(x => x == \"0\"))' +
    '\n         return \"0\";' +
    '\n' +
    '\n     if(binaryList.Count % 3 != 0)' +
    '\n         binaryList.Insert(0, \"0\");' +
    '\n     if (binaryList.Count % 3 != 0)' +
    '\n         binaryList.Insert(0, \"0\");' +
    '\n' +
    '\n     while (binaryList.Count > 0)' +
    '\n     {' +
    '\n         string binNumber = String.Join(\"\", binaryList.Take(3));' +
    '\n         binaryList.RemoveRange(0, 3);' +
    '\n         octal = octal + binToOctalData[binNumber];' +
    '\n     }' +
    '\n' +
    '\n     return octal;' +
    '\n}';

const codeOctalToDecimal = 'public static string OctalToDecimal(string number)' +
    '\n{' +
    '\n     int decimalNumber = 0;' +
    '\n     List&lt;string&gt; octalList = number.ToCharArray()' +
    '\n         .Select(e => e.ToString()).ToList();' +
    '\n     int pow = octalList.Count - 1;' +
    '\n     while (octalList.Count > 0)' +
    '\n     {' +
    '\n         string num = String.Join(\"\", octalList.Take(1));' +
    '\n         octalList.RemoveRange(0, 1);' +
    '\n         decimalNumber += int.Parse(num) * (int)Math.Pow(8, pow);' +
    '\n         pow--;' +
    '\n     }' +
    '\n' +
    '\n     return decimalNumber.ToString();' +
    '\n}';

const codeOctalToBinary = 'public static string OctalToBinary(string number)' +
    '\n{' +
    '\n     Dictionary&lt;string, string&gt; octalToBinaryData = new Dictionary&lt;string, string&gt;()' +
    '\n     {' +
    '\n         {"0", "000" }, {"1", "001"}, {"2", "010"}, {"3", "011"},' +
    '\n         {"4", "100"}, {"5", "101"}, {"6", "110"}, {"7", "111"}' +
    '\n     };' +
    '\n     string binary = \"\";' +
    '\n     List&lt;string&gt; octalList = number.ToCharArray()' +
    '\n         .Select(e => e.ToString()).ToList();' +
    '\n' +
    '\n     if (octalList.All(e => e == "0"))' +
    '\n         return \"000\";' +
    '\n' +
    '\n     if (octalList.Exists(e => e == \"8\" || e == \"9\"))' +
    '\n         return \"\";' +
    '\n' +
    '\n     while (octalList.Count > 0)' +
    '\n     {' +
    '\n         string num = String.Join(\"\", octalList.Take(1));' +
    '\n         octalList.RemoveRange(0, 1);' +
    '\n         binary += octalToBinaryData[num];' +
    '\n     }' +
    '\n' +
    '\n     return binary;' +
    '\n}';

const codeOctalToHexadecimal = 'public static string OctalToHexadecimal(string number)' +
    '\n{' +
    '\n     Dictionary&lt;string, string&gt; octalToBinaryData = new Dictionary&lt;string, string&gt;()' +
    '\n     {' +
    '\n         {"0", "000" }, {"1", "001"}, {"2", "010"}, {"3", "011"},' +
    '\n         {"4", "100"}, {"5", "101"}, {"6", "110"}, {"7", "111"}' +
    '\n     };' +
    '\n     Dictionary&lt;string, int&gt; binToHexData = new Dictionary&lt;string, int&gt;()' +
    '\n     {' +
    '\n         { "0000", 0 }, {"0001", 1}, {"0010", 2}, {"0011", 3}, {"0100", 4},' +
    '\n         {"0101", 5}, {"0110", 6}, {"0111", 7}, {"1000", 8 }, {"1001", 9},' + 
    '\n         {"1010", "A" }, {"1011", "B" }, {"1100", "C" }, {"1101", "D" },' + 
    '\n         {"1110", "E" }, {"1111", "F" }' +
    '\n     };' +
    '\n' +
    '\n     string binary = \"\";' +
    '\n     List&lt;string&gt; octalList = number.ToCharArray()' +
    '\n         .Select(e => e.ToString()).ToList();' +
    '\n' +
    '\n     if (octalList.All(e => e == \"0\"))' +
    '\n         return \"000\";' +
    '\n' +
    '\n     if (octalList.Exists(e => e == \"8\" || e == \"9\"))' +
    '\n         return \"\";' +
    '\n' +
    '\n     while (octalList.Count > 0)' +
    '\n     {' +
    '\n         string num = String.Join(\"\", octalList.Take(1));' +
    '\n         octalList.RemoveRange(0, 1);' +
    '\n         binary += octalToBinaryData[num];' +
    '\n     }' +
    '\n' +
    '\n     string hex = \"\";' +
    '\n     List&lt;string&gt; binaryList = binary.ToCharArray()' +
    '\n         .Select(e => e.ToString()).ToList();' +
    '\n' +
    '\n     if (binaryList.Count == 0)' +
    '\n         return \"\";' +
    '\n' +
    '\n     if (binaryList.All(x => x == "0"))' +
    '\n         return \"0\";' +
    '\n' +
    '\n     //garant binary number is allways 4 digits!' +
    '\n     if (binaryList.Count % 4 != 0)' +
    '\n         binaryList.Insert(0, \"0\");' +
    '\n     if (binaryList.Count % 4 != 0)' +
    '\n         binaryList.Insert(0, \"0\");' +
    '\n     if (binaryList.Count % 4 != 0)' +
    '\n         binaryList.Insert(0, \"0\");' +
    '\n' +
    '\n     while (binaryList.Count > 0)' +
    '\n     {' +
    '\n         string binNumber = String.Join(\"\", binaryList.Take(4));' +
    '\n         binaryList.RemoveRange(0, 4);' +
    '\n' +
    '\n         if (binNumber == \"1010\" || binNumber == \"1011\" || binNumber == \"1100\"' +
    '\n         || binNumber == \"1101\" || binNumber == \"1110\" || binNumber == \"1111\")' +
    '\n             hex = hex + (char)binToHexData[binNumber];' +
    '\n         else' +
    '\n             hex = hex + (int)binToHexData[binNumber];' +
    '\n     }' +
    '\n' +
    '\n     return Regex.Replace(hex, \"^0+\", \"\");' +
    '\n}';

const codeOctalToOctal = "public static string OctalToOctal(int number)\n{\n  return number;\n}";

const codeFactorial = 'public static long Factorial(int n)' +
    '\n{' +
    '\n     long fact = 1;' +
    '\n     for (int i = 1; i < n; i++)' +
    '\n     {' +
    '\n         fact += fact * i;' +
    '\n     }' +
    '\n' +
    '\n     return fact;' +
    '\n}';

const codeFibonacci = 'public static int Fibonacci(int n)' +
    '\n{' +
    '\n     int fn = n;' +
    '\n     int f0 = 0;' +
    '\n     int f1 = 1;' +
    '\n' +
    '\n     if (n < 1)' +
    '\n        return n;' +
    '\n' +
    '\n     for (int i = 2; i <= n; i++)' +
    '\n     {' +
    '\n         fn = f0 + f1;'+
    '\n         f0 = f1;' +
    '\n         f1 = fn;' +
    '\n     }' +
    '\n' +
    '\n     return f1;' +
    '\n}';


const codeDistanceConvert = 'public static double DistanceConvert(double n, string from, string to)' +
    '\n{' +
    '\n     Dictionary<string, double> data = new Dictionary<string, double>()' +
    '\n     {' +
    '\n         {"km", 1000}, {"m", 1}, {"cm", 0.01}, {"mm", 0.001},' +
    '\n         {"mi", 1609.34}, {"nm", 1852}, {"yrd", 0.9144},' +
    '\n         {"ft", 0.3048}, {"in", 0.0254}' +
    '\n     };' +
    '\n' +
    '\n     double result = n * (data[from] / data[to]);' +
    '\n     return result;' +
    '\n}';


const tableData = [
	"0 0000 00 000", "1 0001 01 001", "2 0010 02 002", "3 0011 03 003", "4 0100 04 004", "5 0101 05 005",
	"6 0110 06 006", "7 0111 07 007", "8 1000 08 010", "9 1001 09 011", "10 1010 0A 012", "11 1011 0B 013",
	"12 1100 0C 014", "13 1101 0D 015", "14 1110 0E 016", "15 1111 0F 017", "16 10000 10 020", "17 10001 11 021",
	"18 10010 12 022", "19 10011 13 023", "20 10100 14 024", "21 10101 15 025", "22 10110 16 026", "23 10111 17 027",
	"24 11000 18 030", "25 11001 19 031", "26 11010 1A 032", "27 11011 1B 033", "28 11100 1C 034", "29 11101 1D 035",
	"30 11110 1E 036", "31 11111 1F 037", "32 100000 20 040", "33 100001 21 041", "34 100010 22 042", 
	"35 100011 23 043", "36 100100 24 044", "37 100101 25 045", "38 100110 26 046", "39 100111 27 047",
	"40 101000 28 050", "41 101001 29 051", "42 101010 2A 052", "43 101011 2B 053", "44 101100 2C 054", 
	"45 101101 2D 055", "46 101110 2E 056", "47 101111 2F 057", "48 110000 30 060", "49 110001 31 061", "50 110010 32 062"
];




