"use strict";
var _ = require('lodash');

let a = 5; //Количество сотрудников A
let salaryA = 10_000; // Зарплата сотрудника A
let b = 15; //Количество сотрудников B
let salaryB = 25_000; // Зарплата сотрудника B
let c = 40; //Количество сотрудников C
let salaryC = 50_000; // Зарплата сотрудника C
let d = 10; //Количество сотрудников D
let salaryD = 100_000; // Зарплата сотрудника D

let levelFreeTax; // ставка налога на первом этапе
let level2Tax = 0.1; // ставка налога на втором этапе
let level3Tax = 0.2; // ставка налога на третьем этапе
let level4Tax = 0.5 // ставка налога на четвертом этапе
let salaryFreeStep = 10_000; // налогонеоблагаемая сумма
let salary2Level = 10_000; // налогооблагаемая сумма на втором этапе
let salary3Level = 50_000; // налогооблагаемая сумма на третьем этапе

let salary = [];
let sumTax = [];
let sumTax2 = [];
let sumTax3 = [];
let sumTax4 = [];
for (let i = 0; i < a; i++) {
  salary.push(salaryA);
}
for (let i = 0; i < b; i++) {
  salary.push(salaryB);
}
for (let i = 0; i < c; i++) {
  salary.push(salaryC);
}
for (let i = 0; i < d; i++) {
  salary.push(salaryD);
}
for (let i = 0; i < salary.length; i++) {
  if (salary[i] >= salaryFreeStep) {
    salary[i] = salary[i] - salaryFreeStep;
  }else{salary[i] = 0;}
}

for (let i = 0; i < salary.length; i++) {
  if (salary[i] <= salary2Level){
    sumTax2[i] = salary[i] * level2Tax;
  } if (salary[i] <= salary2Level) {salary[i] = 0;
    }else{
    sumTax2[i] = salary2Level * level2Tax;
    salary[i] = salary[i] - salary2Level;
  }
}

for (let i = 0; i < salary.length; i++) {
  if (salary[i] <= salary3Level){
    sumTax3[i] = salary[i] * level3Tax;
  } if (salary[i] <= salary3Level) {salary[i] = 0;
    }else{
    sumTax3[i] = salary3Level * level3Tax;
    salary[i] = salary[i] - salary3Level;
  }
}

for (let i = 0; i < salary.length; i++) {
  if (salary[i] > 0){
    sumTax4[i] = salary[i] * level4Tax;
  } 
}

var sumTaxes = _.sum(sumTax2)+_.sum(sumTax3)+_.sum(sumTax4);
console.log("Суммарные налоговые отчисления со всех зарплат: " + sumTaxes + " рублей");

let staff = [a, b, c, d];
var staffSum = _.sum(staff);
let averageTax = sumTaxes / staffSum;
console.log("Средние налоговые отчисления на человека: " + Math.floor(averageTax) + " рублей");