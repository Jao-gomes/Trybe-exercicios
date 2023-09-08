const chessPiece = 'Cavalo';

switch (chessPiece.toLowerCase()) {
    case 'rei':
        console.log ('é inútil');
        break
    case 'rainha':
        console.log('acaba com o seu jogo facilmente');
        break
    case 'bispo':
        console.log('anda na diagonal');
        break
    case 'torre':
        console.log('anda retão pra qualquer canto');
        break
    case 'cavalo':
        console.log('anda em L');
        break
    case 'peão':
        console.log('buxa do xadrez');
        break
    default:
        console.log('Erro, peça inválida!');
}



