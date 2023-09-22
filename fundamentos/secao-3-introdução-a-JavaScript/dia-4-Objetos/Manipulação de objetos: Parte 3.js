const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };


function singleObjectExtract(obj,pos) {
    return obj[pos];
}

function somaEstudantes(obj) {
    let somaEstudantesTotal = 0;

    for (let i = 0; i < obj.lessons.length; i += 1) {
        somaEstudantesTotal += obj.lessons[i].students;
    }

    return somaEstudantesTotal;
}

function verificaChaveExiste(obj, chave) {
    for (let i = 0; i < obj.lessons.length; i += 1) {
        if (obj.lessons[i][chave] === undefined) {
            return false;
        }
    }
    return true;
}

function alteraCurso(obj, curso, valor) {

    for(let i = 0; i < obj.lessons.length; i += 1){

        if (obj.lessons[i].course === curso) {
            obj.lessons[i].shift = valor;
            return true;
        }
    }
    return false;

}

console.log(alteraCurso(school, 'Python', 'Noite'));

console.log(school.lessons[0]);