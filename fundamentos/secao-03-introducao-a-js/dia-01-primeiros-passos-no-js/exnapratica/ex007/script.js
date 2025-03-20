
// Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

// ⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

// const salary = 20000;
// let salaryReduceByInss;
// let liquidSalary;


// if(salary <= 1556.94){
//     let discount = (salary * 8)/100;
//     salaryReduceByInss = Math.round(salary - discount); 
// }else if(salary > 1556.95 && salary < 2594.92){
//     let discount = (salary * 9)/100;
//     salaryReduceByInss = Math.round(salary - discount); 
// }else if(salary > 2594.93 && salary < 5189.82){
//     let discount = (salary * 11)/100;
//     salaryReduceByInss = Math.round(salary - discount); 
// }else {
//     let discount = 570.88;
//     salaryReduceByInss = Math.round(salary - discount); 
// }

// if(salaryReduceByInss < 1903.98){
//     console.log("isento do imposto de renda");
// } else if(salaryReduceByInss > 1903.99 && salaryReduceByInss < 2826.25){
//     let aliquotaIr = (salaryReduceByInss * 7.5)/100
//     let baseValue = Math.round(aliquotaIr - 142.80);
//     liquidSalary = Math.round(salaryReduceByInss - baseValue);
// } else if(salaryReduceByInss > 2826.66 && salaryReduceByInss < 3751.05){
//     let aliquotaIr = (salaryReduceByInss * 15)/100
//     let baseValue = Math.round(aliquotaIr - 354.80);
//     liquidSalary = Math.round(salaryReduceByInss - baseValue);
// } else if(salaryReduceByInss > 3751.06 && salaryReduceByInss < 4664.68){
//     let aliquotaIr = (salaryReduceByInss * 22.5)/100
//     let baseValue = Math.round(aliquotaIr - 636.13);
//     liquidSalary = Math.round(salaryReduceByInss - baseValue);
// } else(salaryReduceByInss > 4664.68)
//     let aliquotaIr = (salaryReduceByInss * 27.5)/100
//     let baseValue = Math.round(aliquotaIr - 869.36);
//     liquidSalary = Math.round(salaryReduceByInss - baseValue);

const salary = 20000;
let salaryReduceByInss;
let liquidSalary;

// Cálculo do INSS
if (salary <= 1556.94) {
    salaryReduceByInss = salary - (salary * 8) / 100;
} else if (salary <= 2594.92) {
    salaryReduceByInss = salary - (salary * 9) / 100;
} else if (salary <= 5189.82) {
    salaryReduceByInss = salary - (salary * 11) / 100;
} else {
    salaryReduceByInss = salary - 570.88;
}

// Cálculo do IR
if (salaryReduceByInss <= 1903.98) {
    console.log("Isento do imposto de renda");
    liquidSalary = salaryReduceByInss;
} else if (salaryReduceByInss <= 2826.65) {
    liquidSalary = salaryReduceByInss - ((salaryReduceByInss * 7.5) / 100 - 142.80);
} else if (salaryReduceByInss <= 3751.05) {
    liquidSalary = salaryReduceByInss - ((salaryReduceByInss * 15) / 100 - 354.80);
} else if (salaryReduceByInss <= 4664.68) {
    liquidSalary = salaryReduceByInss - ((salaryReduceByInss * 22.5) / 100 - 636.13);
} else {
    liquidSalary = salaryReduceByInss - ((salaryReduceByInss * 27.5) / 100 - 869.36);
}

salaryReduceByInss = Math.round(salaryReduceByInss);
liquidSalary = Math.round(liquidSalary);

console.log("Salário após INSS:", salaryReduceByInss);
console.log("Salário líquido:", liquidSalary);



















console.log(salaryReduceByInss);
console.log(liquidSalary);

