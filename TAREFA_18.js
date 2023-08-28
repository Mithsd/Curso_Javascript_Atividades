
 let valores = [];
    let soma = 0;
    let media;

    for(let i = 0; i < 5; i++){
        valores[i] = i + 1;
    }
    for(let i = 0; i < 5; i++){
        soma += valores[i];
    }
    media = soma / 5;
    console.log(`Média: ${media}\nSoma: ${soma}