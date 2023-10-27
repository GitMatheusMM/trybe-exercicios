let n = 15;
let linha = '';
let numLinha = n - 1;

for(let i = 0; i < n; i++){

    for(let i2 = 0; i2 < n; i2++){
        if(i2 < numLinha){
            linha += ' ';
        }else{
            linha += '*';
        }
    }
    console.log(linha);
    linha = '';
    numLinha -= 1;
}