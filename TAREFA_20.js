const numeros = [10, 5, 8, 3, 7, 12, 4, 9, 6];

const PAR = [];
const IMPAR = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        PAR.push(numeros[i]);
    } else {
        IMPAR.push(numeros[i]);
    }
}

console.log("Números Pares:", PAR);
console.log("Números Ímpares:", IMPAR);




