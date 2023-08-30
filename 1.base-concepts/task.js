"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2)-4*a*c;

  if (D > 0) {
    arr.push((-b + Math.sqrt(D) )/(2*a));
    arr.push ((-b - Math.sqrt(D) )/(2*a));
  } else if (D == 0) {
    arr.push(-b/(2*a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let Payment = S * (P + (P / (Math.pow((1 + P), countMonths) - 1)));
  let Total = Payment * countMonths;

  return Number(Total.toFixed(2));

}