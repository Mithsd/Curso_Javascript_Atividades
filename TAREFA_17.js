
    const a = [1,2,3,4,5];
    let maior = a[0];
    for(let i = 0; i < 5; i ++)
    {
        if(a[i] > maior){
            maior = a[i];
        }
    }
    console.log(maior);