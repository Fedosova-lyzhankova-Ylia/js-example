"use strict";
//задание 1
let result = prompt("Введите текст", "Введите текст");
console.log(result);
alert(`${result}`);

//задание 2
alert("Введи три числа и получишь их сумму");
let algoritmH1 = +prompt("введите первое число");
let algoritmH2 = +prompt("введите второе число");
let algoritmH3 = +prompt("введите третье  число");
console.log(algoritmH1 + algoritmH2 + algoritmH3);
alert(`СУММА ${algoritmH1 + algoritmH2 + algoritmH3}`);

//задание 3
let nameN = prompt("Введите ваше имя", "ваше имя");
let ageN = +prompt("Сколько Вам лет?", "введите возрат в цифрах");
if (ageN >='18') {
    alert(`ДОБРО ПОЖАЛОВАТЬ ${nameN}`);
  } else {
      alert(`Простите,${nameN}доступ ЗАКРЫТ`);
  }

