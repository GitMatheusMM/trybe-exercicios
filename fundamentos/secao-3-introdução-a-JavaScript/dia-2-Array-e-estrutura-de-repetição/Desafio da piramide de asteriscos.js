let n = 5;

let linha = '';

for(let i = 0; i < n; i++){

    for(let i2 = 0; i2 <= i; i2++){
        linha += '*';
    }
    console.log(linha);
    linha = '';
}