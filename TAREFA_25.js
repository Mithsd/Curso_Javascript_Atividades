
    const carros = {
    marcas: ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
    }

    let tamanho = Object.keys(carros.marcas).length;
    let marca = carros.marcas
    let primeiraLetra;
    let marcasComF = [];


    for(let i = 0; i < tamanho; i++){
        primeiraLetra = marca[i].slice()[0];

        if(primeiraLetra == 'f' || primeiraLetra == 'F'){
            marcasComF.push(marca[i]);
        }
    }
    console.log(`Marcas que começam com 'F': ${marcasComF}`);