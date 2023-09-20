let num = 5;
let linha = '';
for(let i=0; i<num;i++){
    for(let i2 = 0; i2 < num; i2++){
        linha += '*';
    }
    console.log(linha);
    linha = '';
}