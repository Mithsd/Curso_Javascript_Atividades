let kg = 60;
let altura=1.20;
let imc = kg/(altura**2)

    
    if(imc < 18.5)
    {
        console.log("MAGREZA");
    }
    else if (imc >= 18.5 && imc <= 24.9)
    {
        console.log("NORMAL");
    }
    else if (imc >= 25 && imc <= 29.9)
    {
        console.log("SOBREPESO");
    }
    else if (imc >= 30 && imc <= 39.9)
    {
        console.log("OBESIDADE");
    }
    else if (imc > 40)
    {
        console.log("OBESIDADE GRAVE");
    }