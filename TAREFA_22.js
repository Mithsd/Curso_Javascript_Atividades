const ListaDeCompras = {
    produtos: {
        banana: 2.5,
        maça: 3.0,
        cenoura: 1.2,
        batata: 1.0,
        abacaxi: 5.0
    }
};

function calcularTotal(lista) {
    const valores = Object.values(lista.produtos);
    const total = valores.reduce((acc, valor) => acc + valor, 0);
    return total;
}

const totalDaLista = calcularTotal(ListaDeCompras);
console.log("Total da lista de compras: R$" + totalDaLista);