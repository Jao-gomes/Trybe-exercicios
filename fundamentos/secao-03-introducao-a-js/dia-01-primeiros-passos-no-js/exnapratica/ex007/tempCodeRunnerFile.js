const salary = 20000;
let salaryReduceByInss;
let liquidSalary;


if(salary <= 1556.94){
    let discount = (salary * 8)/100;
    salaryReduceByInss = Math.round(salary - discount); 
}else if(salary > 1556.95 && salary < 2594.92){
    let discount = (salary * 9)/100;
    salaryReduceByInss = Math.round(salary - discount); 
}else if(salary > 2594.93 && salary < 5189.82){
    let discount = (salary * 11)/100;
    salaryReduceByInss = Math.round(salary - discount); 
}else {
    let discount = 570.88;
    salaryReduceByInss = Math.round(salary - discount); 
}

if(salaryReduceByInss < 1903.98){
    console.log("isento do imposto de renda");
} else if(salaryReduceByInss > 1903.99 && salaryReduceByInss < 2826.25){
    let aliquotaIr = (salaryReduceByInss * 7.5)/100
    let baseValue = Math.round(aliquotaIr - 142.80);
    liquidSalary = Math.round(salaryReduceByInss - baseValue);
} else if(salaryReduceByInss > 2826.66 && salaryReduceByInss < 3751.05){
    let aliquotaIr = (salaryReduceByInss * 15)/100
    let baseValue = Math.round(aliquotaIr - 354.80);
    liquidSalary = Math.round(salaryReduceByInss - baseValue);
} else if(salaryReduceByInss > 3751.06 && salaryReduceByInss < 4664.68){
    let aliquotaIr = (salaryReduceByInss * 22.5)/100
    let baseValue = Math.round(aliquotaIr - 636.13);
    liquidSalary = Math.round(salaryReduceByInss - baseValue);
} else(salaryReduceByInss > 4664.68)
    let aliquotaIr = (salaryReduceByInss * 27.5)/100
    let baseValue = Math.round(aliquotaIr - 869.36);
    liquidSalary = Math.round(salaryReduceByInss - baseValue);


















console.log(salaryReduceByInss);
console.log(liquidSalary);

