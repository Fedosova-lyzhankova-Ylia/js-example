"use strict";
//домашнее задание 3
//задача 1

// let a = +prompt("Введите первое число диапазона:");
// let b = +prompt("Введите второе число диапазона (диапазон не менее пяти значений):");
// let arr = [];

// if (Math.abs(a - b) > 5 ) {
//   if (a < b) {
//     for (a; a <= b; a++) {
//       arr.push(a);
//     }
//     alert(arr);
//   } else if (a > b) {
//     for (a; a >= b; b++) {
//       arr.unshift(b);
//     }
//     alert(arr);
//   }
// }else{ alert("введите заново");}

// Задание №2:
// let pin = 1111;
// let puk = 11111111;
// let popPin = 3;
// let popPuk = 3;
// let raz = 0;
// let razPuk = 0;
// let parolPin;
// let parolPuk;
// do {
//   parolPin = +prompt(`Введите PIN код, у вас есть ${popPin} попытки`);
//   raz++;
//   popPin--;
// } while (raz < 3 || parolPin === pin);
// {
//   if (parolPin === pin) {
//     alert("Верно! Вы ввели правильный Pin-код");
//   } else if (raz != 0) {
//     alert("Пароль не верный, введите PUK у вас есть 3 попытки");
//   }
// }
// do {
//   parolPuk = +prompt(`Введите PUK код, у вас есть ${popPuk} попытки`);
//   razPuk++;
//   popPuk--;
// } while (razPuk < 3 || parolPuk === puk);
// {
//   if (parolPuk === puk) {
//     alert("Верно! Вы ввели правильный PUK-код");
//   } else if (raz != 0) {
//     alert("Вы ЗАБЛОКИРОВАНЫ");
//   }
// }


//задача 3
// let a;
// do {
//   a = +prompt("Введите любое число", 0);
//   if (isNaN(a)) {
//     alert("Это не цифра :( Попробуйте снова.");
//   } else {
//     let resylt1 =
//       a > 100 ? "введенное число больше ста" : "введенное число меньше ста";
//     let resylt2 = a % 2 == 0 ? "четное" : "нечетное";
//     let resylt3 = a % 1 === 0 ? "не дробное" : "дробное";
//     let resylt4 = a > 0 ? "положительное" : "отрицательное";
//     alert(`${resylt1}, ${resylt2}, ${resylt3}, ${resylt4} `);
//   }
// } while (a <= 100 && a);

// //задача 4
// for (let i = 0; i <= 50; i++) {
//   if (i % 7 == 0) continue;
//   console.log(i);
// }
