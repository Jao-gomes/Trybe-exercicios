const salarioBruto = 3000;
let salarioBase;
let salarioLiquido

// 1500.10 * 8 = resultado
// resultado / 100 = porcentagem
// porcentagem


if(salarioBruto < 1.556,94) {
    porcentagemDoInss = (salarioBruto * 8) / 100
    salarioBase = salarioBruto - porcentagemDoInss
} else if (salarioBruto >= 1.556,95 && salarioBruto < 2.594,92) {
    porcentagemDoInss = (salarioBruto * 9) / 100
    salarioBase = salarioBruto - porcentagemDoInss
} else if (salarioBruto >= 2.594,93 && salarioBruto < 5.189,82) {
    porcentagemDoInss = (salarioBruto * 11) / 100
    salarioBase = salarioBruto - porcentagemDoInss
}

if(salarioBase < 1.903,98) {
    console.log('insento de imposto de renda');
    salarioLiquido = salarioBase
} else if( salarioBase >= 1.903,98 && salarioBase < 2.826,65) {
    porcentagemDoImpostoDeRenda = Math.floor(((salarioBase * 7.5) /100 ) - 142,80)
    salarioLiquido = salarioBase - porcentagemDoImpostoDeRenda
} else if ( salarioBase >= 2.826,66 && salarioBase < 3.751 ) {
    porcentagemDoImpostoDeRenda = ((salarioBase * 15)/ 100) - 354,80 
    salarioLiquido = salarioBase - porcentagemDoImpostoDeRenda
} 

console.log(salarioBase);
console.log(salarioLiquido);


let aliquotINSS;
let aliquotIR;

let grossSalary = 3000;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
};

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: R$" + (baseSalary - aliquotIR));