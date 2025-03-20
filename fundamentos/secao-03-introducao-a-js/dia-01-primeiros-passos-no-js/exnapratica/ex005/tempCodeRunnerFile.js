let chessPiece = 'bishop';

switch (chessPiece) {
    case 'king':
        console.log("Pode se mover em qualquer direção, mas apenas uma casa por vez. ");
        break;
    case 'lady':
        console.log("Pode se mover em qualquer direção, quantas casas quiser, em um único sentido na jogada.");
        break;
    case 'tower':
        console.log("Move-se em linha reta nas colunas e fileiras do tabuleiro");
        break;
    case 'bishop':
        console.log("Move-se em linhas retas nas diagonais do tabuleiro ");
        break;
    case 'horse':
        console.log("Move-se em um formato de L, Pode pular outras peças.");
        break;
    case 'pawn':
        console.log("Move-se para frente, uma casa de cada vez, exceto no primeiro movimento na partida, quando pode se mover duas casas.");
        break;
    default:
        console.log("peça inexistente!");
        break;
}