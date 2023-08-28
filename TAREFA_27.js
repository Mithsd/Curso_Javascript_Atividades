function calcularSomaArray(numeros) {
    let soma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    
    return soma;
}

const arrayDeNumeros = [5, 10, 3, 7];
const somaTotal = calcularSomaArray(arrayDeNumeros);
console.log("A soma dos números é:", somaTotal); 