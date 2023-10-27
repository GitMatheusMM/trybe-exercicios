const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaValores = 0;
let mediaAritmetica = 0;
let maiorValor = 0;
let numImpares = 0;
let valorAtual;
let tamanhoArray = numbers.length;


for(let index = 0; index < tamanhoArray; index++){

    valorAtual = numbers[index];
    console.log(valorAtual);
    somaValores += valorAtual;

    if(index === (tamanhoArray-1)){

        mediaAritmetica = somaValores / tamanhoArray;

    }

    if(valorAtual > maiorValor){
        
        maiorValor = valorAtual;

    }

    if(valorAtual % 2 !== 0){
        numImpares++;
    }

}

console.log(`O valor total da soma do array é: ${somaValores}`);

if(mediaAritmetica > 20){

    console.log(`O valor da média aritmética é maior do que 20 (${mediaAritmetica})`);

}else{

    console.log(`O valor da média aritmética é menor do que 20 (${mediaAritmetica})`);

}

console.log(`O maior valor contido no array é de: ${maiorValor}`);

if(numImpares == 0){
    console.log(`Nenhum valor ímpar encontrado`);
}
else{
    console.log(`Há um total de: ${numImpares} números ímpares no array`);
}

