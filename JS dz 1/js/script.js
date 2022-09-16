"use strict";
//задание 1
const result = prompt("Введите текст", "Введите текст");
console.log(result);
alert(`${result}`);

// //задание 2
alert("Введи три числа и получишь их сумму");
const algoritmH1 = +prompt("введите первое число");
const algoritmH2 = +prompt("введите второе число");
const algoritmH3 = +prompt("введите третье  число");
console.log(algoritmH1 + algoritmH2 + algoritmH3);
alert(`СУММА ${algoritmH1 + algoritmH2 + algoritmH3}`);

//задание 3
const nameN = prompt("Введите ваше имя", "ваше имя");
const ageN = +prompt("Сколько Вам лет?", "введите возрат в цифрах");
if (ageN >= 18) {
  alert(`ДОБРО ПОЖАЛОВАТЬ ${nameN}`);
} else {
  alert(`Простите,${nameN}доступ ЗАКРЫТ`);
}

//задание 4
let nameBlok = confirm("Хотите ввести название блока?");
if (nameBlok == true) {
  nameBlok = prompt("Введите название блока");
} else {
  nameBlok = ""
  console.log('элементу не присвоен класс')

}
let nameElement = confirm("Хотите ввести название элемента?");
if (nameElement == true) {
  nameElement = prompt("Введите название элемента");
} else {
  nameElement =""
  console.log( `${nameElement}` )
}
let nameMod = confirm("Хотите ввести название модификатора?");
if (nameMod == true) {
  nameMod = prompt("Введите название модификатора");
  console.log(`${nameBlok} ${nameElement} ${nameMod}`);
} else {
  nameMod = "";
  console.log(`${nameBlok} ${nameElement}`);
}

alert(`ИМЯ ${nameBlok}  ${nameElement} ${nameMod}`);

// //задание 5
alert("Создай пример сам и получи ответ");
const a = +prompt("введите первое число");
const b = +prompt("введите второе число");
const arifmet = prompt("введите нужную арифметическую операцию на выбор /,+,-,*");
if ((arifmet == '/')) {
  console.log(a / b);
  alert(` ${a / b}`);
}
if ((arifmet == '+')) {
    console.log(a + b);
    alert(` ${a + b}`);
  }
  if ((arifmet == '*')) {
    console.log(a * b);
    alert(` ${a * b}`);
  }
  if ((arifmet == '-')) {
    console.log(a - b);
    alert(` ${a - b}`);
  } else {
    console.log(NaN);
  }

