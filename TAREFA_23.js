const livros = {
    'O Iluminado': 50,
    'Os sete maridos de Evelyn Hugo': 60,
    'O Hobbit': 0
};

const propriedadeComValorZero = Object.keys(livros).find(propriedade => livros[propriedade] === 0);

if (propriedadeComValorZero) {
    console.log("Propriedade com valor zero:", propriedadeComValorZero);
} else {
    console.log("Nenhuma propriedade encontrada com valor zero.");
}
