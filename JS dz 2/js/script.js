"use strict";
//домашнее задание 2
//задача 1
const nameN = prompt("Введите Ваше имя");
const ageN = prompt("Введите Вашу фамилию");
const ageNic = prompt("Введите Ваш Никнейм");
if (
  (nameN && ageN && ageNic) ||
  (nameN && ageN) ||
  (nameN && ageNic) ||
  (ageN && ageNic)
) {
  alert(
    `ДОБРО ПОЖАЛОВАТЬ ${nameN} ${ageN}` ||
      `ДОБРО ПОЖАЛОВАТЬ ${ageNic}` ||
      `ДОБРО ПОЖАЛОВАТЬ ${nameN}`
  );
} else if  ([] || ageN || ageNic)
{
  alert(`ДОБРО ПОЖАЛОВАТЬ 'Noname'`);
}

// //задание 2
let a = +prompt("Введите любое число");
if (isNaN (a)) {alert("Это не цифра :( Попробуйте снова.")
}else{
let resylt1 = a > 100 ? "введенное число больше ста":"введенное число меньше ста";
let resylt2 = a % 2 == 0 ? "четное" : "нечетное" ;
let resylt3 = a % 1 === 0 ? "не дробное" : "дробное" ;
let resylt4 = a > 0 ? "положительное" : "отрицательное" ;
alert(`${resylt1}, ${resylt2}, ${resylt3}, ${resylt4} `);}

//задание 3
//задание 3.2
alert("Введи три числа и получишь их сумму");
const h1 = +prompt("введите первое число");
const h2 = +prompt("введите второе число");
const h3 = +prompt("введите третье  число");
let z = h1 + h2 + h3 ;
alert(`сумма чисел ${z}`);

// //задание 3.3
const nameNn = prompt("Введите ваше имя", "ваше имя");
const ageNn = +prompt("Сколько Вам лет?", "введите возрат в цифрах");
ageNn >= 18
? alert(`ДОБРО ПОЖАЛОВАТЬ ${nameNn}`)
  : alert(`Простите,${nameNn} доступ ЗАКРЫТ`);

//Задание 4
let f = +prompt("введите число от 0-9");
switch (f) {
  case 0: console.log("ноль");
    alert("ноль");
    break;
  case 1:console.log("один");
    alert("один");
    break;
  case 2:console.log("два");
    alert("два");
    break;
  case 3:console.log("три");
    alert("три");
    break;
  case 4:console.log("четыре");
    alert("4");
    break;
  case 5:console.log("пять");
    alert("пять");
    break;
  case 6:console.log("шесть");
    alert("шесть");
    break;
  case 7:console.log("семь");
    alert("семь");
    break;
  case 8:console.log("восемь");
    alert("восемь");
    break;
  case 9:console.log("девять");
    alert("девять");
    break;
 default: alert("значение введено не корректно!!!");
console.log(`${f}`);
   
}
