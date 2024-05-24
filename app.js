// Escribe tu código aquí.
function bigWords(str, arr) {
    return arr.filter(word => word.length > str.length);
}

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
console.log(bigWords('bocina', myArray)); 