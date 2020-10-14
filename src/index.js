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
    let mass = [];
    let morse = [];
    let str = [];
    let masss = []

    for(let x = 0; x<expr.length/10; x++){
        mass.push(expr.slice((x*10), (x*10)+10));
    }

    for(let x = 0; x<mass.length; x++){
        for(let z = 0; z<mass[x].length/2;z++){
            if(mass[x][z*2]=='1' && mass[x][(z*2)+1]=='0'){
                str+='.'
            } else if(mass[x][z*2]=='1' && mass[x][(z*2)+1]=='1'){
                str+='-'
            } else if(mass[x]=="**********"){
                str+=' '
                break;
            }
        }
        morse.push(str);
        str = ''
    }

    let key = Object.keys(MORSE_TABLE)
    let values = Object.values(MORSE_TABLE)

    for(let x = 0; x<morse.length; x++){
        if(morse[x]==' '){
            masss.push(' ')
        }
        for(let z = 0; z<key.length; z++){
            if(morse[x]==key[z]){
                masss.push(values[z])
            }
        }
    }
    return masss.join('');
}

module.exports = {
    decode
}