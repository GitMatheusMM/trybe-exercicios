let salarioBruto = 5222.87;
let aliquota = 0;
let aliquotaMax = false;


// Definindo a porcentagem da aliquota do INSS

if(salarioBruto <= 1556.94){
    aliquota = 0.08;
}
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquota = 0.09;
}
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    aliquota = 0.11;
}
else{
   aliquotaMax = true;
}


//Calculo do salario pós desconto da % da aliquota do INSS
let salarioBase = 0;

if(aliquotaMax === true){
    salarioBase = salarioBruto - 570.88;
}
else{
    salarioBase = salarioBruto - (salarioBruto * aliquota);
}

//Calculo do imposto de renda
let aliquotaIR = 0;
let parcelaDeduzir = 0;
let isentoIR = false;

if(salarioBase >= 1903.98){
    isentoIR = true;
}
else if(salarioBase <= 2826.65 && salarioBase >= 1903.99){
    aliquotaIR = 0.075;
    parcelaDeduzir =  142.8;
}

else if(salarioBase <= 3751.05 && salarioBase >= 2826.66){
    aliquotaIR = 0.15;
    parcelaDeduzir =  354.8;
}

else if(salarioBase <= 4664.68 && salarioBase >= 3751.06){
    aliquotaIR = 0.225;
    parcelaDeduzir =  636.13;
}
else{
    aliquotaIR = 0.275;
    parcelaDeduzir =  869.36;
}

// Calculo do salario liquido
let salarioLiquido = 0;
let valorIR = 0;

valorIR = (salarioBase*aliquotaIR) - parcelaDeduzir;
salarioLiquido = salarioBase - valorIR;

console.log('O salário liquido é: '+salarioLiquido);

