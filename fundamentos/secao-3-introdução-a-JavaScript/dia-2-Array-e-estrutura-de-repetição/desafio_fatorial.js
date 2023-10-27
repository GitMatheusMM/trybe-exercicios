let numFatorial = 10;
let resultadoFatorial = numFatorial;

for(let i = numFatorial; i >=1; i--){

    if(i !== numFatorial){
        resultadoFatorial = resultadoFatorial * i;
    }
}

console.log(`O resultado do fatorial de ${numFatorial} é ${resultadoFatorial}`);