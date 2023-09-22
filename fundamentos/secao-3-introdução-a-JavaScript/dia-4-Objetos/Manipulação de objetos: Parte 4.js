const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

//Pegar os tipos de frutas na cesta

let tiposDeFrutas = [];

for (let i = 0; i < basket.length; i++) {

    if (!tiposDeFrutas[basket[i]]) {
        tiposDeFrutas[basket[i]] = 1;
    } else {
        tiposDeFrutas[basket[i]] += 1;
    }
}

tiposDeFrutas = Object.entries(tiposDeFrutas);


let mensagem = 'Sua cesta possui: ';

for (let i = 0; i < tiposDeFrutas.length; i++) {

    if(tiposDeFrutas[i][1] > 1) {

        if(i != (tiposDeFrutas.length - 1)){
            mensagem += `${tiposDeFrutas[i][1]} ${tiposDeFrutas[i][0]}s, `;
        } else {
            mensagem += `${tiposDeFrutas[i][1]} ${tiposDeFrutas[i][0]}s`;
        }
    }else{
        if(i != (tiposDeFrutas.length - 1)){
            mensagem += `${tiposDeFrutas[i][1]} ${tiposDeFrutas[i][0]}, `;
        } else {
            mensagem += `${tiposDeFrutas[i][1]} ${tiposDeFrutas[i][0]}`;
        }
    }
}

console.log(mensagem);