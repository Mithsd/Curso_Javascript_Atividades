const listaDeNomes = {
    nomes: ['maria', 'smith', 'rafaela']
};

function encontrarMaiorNome(lista) {
    const maiorNome = lista.nomes.reduce((maior, nome) => nome.length > maior.length ? nome : maior, '');
    return maiorNome;
}

const maiorNomeEncontrado = encontrarMaiorNome(listaDeNomes);
console.log("O maior nome é:", maiorNomeEncontrado);
