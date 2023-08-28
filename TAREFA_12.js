 let a = 5, b = 3, c = 12;

    console.log("Ordem Crescente: ");


    if(a > b){
        if(b > c){
            console.log(`${a}, ${b}, ${c}`);
        }else if(a > c){
            console.log(`${a}, ${c}, ${b}`);
        }else{
            console.log(`${c}, ${a}, ${b}`);
        }
    }else{
        if(a > c){
            console.log(`${b}, ${a}, ${c}`);
        }else if(b > c){
            console.log(`${b}, ${c}, ${a}`);
        }else{
            console.log(`${c}, ${b}, ${a}`);
        }
    }