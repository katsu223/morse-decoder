const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let lengthOfExpr = expr.length;
    const numOfLetters = lengthOfExpr / 10;
    let decodedString = '';
    startSubstr = 0;
    
    for (let i = 1; i <= numOfLetters; i++, startSubstr += 10) {
        let subOfCodedString = expr.substr(startSubstr, 10);

        if (subOfCodedString[0] === '*') {
            decodedString += ' '; 
            continue;
        }

        let symbolOfMorseTable = ''
        let j = 0;
        while (subOfCodedString[j] === '0') j++;

        for (j++; j < 10; j += 2) {
            (subOfCodedString[j] === '0') ? symbolOfMorseTable += '.' : symbolOfMorseTable += '-';
        }

        decodedString += MORSE_TABLE[symbolOfMorseTable];
    }

    return decodedString;
}

module.exports = {
    decode
}