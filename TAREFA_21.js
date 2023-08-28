function objetoEstaVazio(objeto) {
    return Object.keys(objeto).length === 0;
}

const obj1 = {};
const obj2 = { chave: 'valor' };

console.log(objetoEstaVazio(obj1)); 
console.log(objetoEstaVazio(obj2));