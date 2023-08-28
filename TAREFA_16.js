let a = ["MARIA", "EDUARDA", "SMITH"];
    let primeiraLetra = [];

    for(let i = 0; i < 3; i++){
        primeiraLetra[i] = a[i].slice()[0];
    }
    console.log(`${primeiraLetra}`);