const grade = 51;
let message = '';

if (grade >= 80){
    message = 'aprovada';
} else if (grade < 80 && grade >= 60){
    message = 'lista de espera';
} else {
    message = 'reprovada'
}

console.log(message);
