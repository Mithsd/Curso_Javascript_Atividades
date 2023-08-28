
let op = 2;
    let resultado, a = 10, b = 3;

    switch(op){
        case 1:
            resultado = a + b;
            console.log(`${a} + ${b} = ${resultado}`);
            break;
        case 2:
            resultado = a - b;
            console.log(`${a} - ${b} = ${resultado}`);
            break;
        case 3:
            resultado = a * b;
            console.log(`${a} * ${b} = ${resultado}`);
            break;
        case 4:
            resultado = a / b;
            console.log(`${a} / ${b} = ${resultado}`);
            break;
        default:
            console.log("Operação inválida!")};