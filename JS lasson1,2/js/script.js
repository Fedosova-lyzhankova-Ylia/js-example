"use strict";
// 'use strict' обязательное при документе
//типы:
//number-число 1,2,3,+Infinity,-Infinity,0.8,0.3,NaN-не число not anambr
//string-строки 'dog'-лучше этот,"cat",`cow`
//boolean try (1), false(0)
//object-{литралы},[масив],null
//undefined-undefined ничего нету(пустота)
//null-ничего(хотим что бы там было но попозже)
//bigInd-большие числы 1n
//symbol {} обьект,но у него есть одно но
//typeof null=>'object' возврат типа данных в виде строчки

//математические символы -,+,/,*,**-возведение в степень, % остаток от деления
//=, ==, ===,+=, -=, ++,--, != не строгое ровно,!== строгое не равно
//false, 0, undefined, null, ''(отрицательные значения false)
///амперсант &&-и || или
//способ обьявления переменной: var-НЕ ПОЛЬЗОВАТЬСЯ, let-пусть только после обьявления, const-константа
// dit checkout -b name
//git push сохранить
console.log(1 - "1х"); //конкатенация только + дает конкатенацию
// let namFerstCat = 1;
// namFerstCat ='hgfhf';
// var dog ='Bim'
// dog = 1
// console.log(dog)
//NaN-не сравнивается ни с чем
//+ перед оператором унарный оператор
console.log(1 == "1");
console.log(1 === "1");

let str = "1";
//перевод строки в число
console.log(+str);
console.log(str);
console.log(Number(str));
//перевод из числа в строку
console.log(str + "");
console.log(str.toString());
console.log(String(str));

//есть три функции модальные окна
//alert-оповещение
//confirm -дает вариант Да или нет
//prompt- окно для ввода значения инпут
//!-НЕ


alert("i lake js");
let doYouLikeQuestion = confirm("Do you like js?");
console.log(doYouLikeQuestion);

const enterWords = prompt("enter any");
console.log(enterWords)

()-условия
{}результат -тело
конструкция if else
if (isNaN(enterWords)) {
  console.log("NaN");
}
if (enterWords === "word") {
  console.log("Cool");
} else if(enterWords === "cat"){
    console.log("animal");
}
else {
    console.log('not cool')
}


alert("введите свой возрат");
let doYouLikeQuestion = confirm("вам есть 18 лет?");
console.log(doYouLikeQuestion);

const enterWords = +prompt("введите свой возраст");
if (enterWords >'17') {
    const confirmAge = confirm('Вы уверены?')
    console.log(alert("добро пожаловать"));
    if(confirmAge === true){
        alert('спасибо')}
  } else {
      console.log(alert('вход воспрещен'))
  }

const cat = 'барсик'
const sayHi = 'хей привет'
console.log(`${sayHi} ${cat}`)
