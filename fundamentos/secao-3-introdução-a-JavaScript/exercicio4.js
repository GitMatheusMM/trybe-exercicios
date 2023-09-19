let angulo1 = parseInt(30);
let angulo2 = parseInt(70);
let angulo3 = parseInt(80);

let checkTriangulo;


if(angulo1 > 0 && angulo2 > 0 && angulo3 > 0){


    if((angulo1+angulo2+angulo3) == 180){
        console.log(true);
    }
    else{
        console.log(false);
    }

} 
else{
    console.log('Erro, existe um ângulo inválido!');
}