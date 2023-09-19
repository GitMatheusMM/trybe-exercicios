let pecaXadrez = 'rei';
let movimentosPossiveis = '';

switch(pecaXadrez){
    case 'rei': movimentosPossiveis = 'Qualquer direção, uma casa por vez';
      break;
    case 'dama': movimentosPossiveis = 'Qualquer direção, quantas casas quiser';
      break;
    case 'torre': movimentosPossiveis = 'Vertical ou horizontal';
      break;
    case 'bispo': movimentosPossiveis = 'Diagonal, porém só na cor da casa que iniciar';
      break;
    case 'cavalo': movimentosPossiveis = 'Em L';
      break;
    case 'peão': movimentosPossiveis = 'Somente uma casa pra frente, exceto quanto é o primeiro movimento';
      break;
    default: movimentosPossiveis = 'Não existe essa peça no xadrez';
}

console.log(movimentosPossiveis);