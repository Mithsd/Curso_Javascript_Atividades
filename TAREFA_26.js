function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

const numero1 = 4;
const numero2 = 7;

console.log(numero1 + ' é ' + verificarParOuImpar(numero1)); 
console.log(numero2 + ' é ' + verificarParOuImpar(numero2));
