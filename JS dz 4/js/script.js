"use strict";
///домашнее 5
// //задание
// //1
let obj = {
  name: "Julia",
  age: "38",
  skills: "Avtocad",
};
//2
obj.person = "women";
obj.hobby = "cook";
console.log(obj);

///3
let jlia = {
  name: "Julia",
  age: "38",
  skills: "Avtocad",
  work: "Arhitector"
};

///метод вне обьекта
function sayHi() {
  console.log(`Привет ${this.name}`);
}
jlia.sayHi = sayHi;
jlia.sayHi();

jlia.working = function (x) {
  console.log(`работает ${x} лет`);
};
jlia.working(7);


let jliA= {
  name: "Julia",
  age: "38",
  skills: "Avtocad",
  work: "Arhitector",
  newerName: function(){
    return this.name + ' ' + this.work
  }
};
console.log(jliA.newerName())

///перебрать все ключи обьекта
function keysVse(){
  for(let key in obj){
    return `${key}`+ `${obj[key]}`
  }
}
console.log(keysVse(jlia))


///4 стрелочная функция
Object.keys(obj).forEach((key) => {
  let value = obj[key];

  console.log(`${key}: ${value}`);
});

///5создай одну фунцкию на 4 обьекта и делай ее 3 дня
//1//проверка на пустоту
let user = {};
//2// просто обьект
let users = {
  name: "Jorge",
  age: 12,
};
//3//проверка на null
let userVlog = {
  name: "Jorge",
  age: 12,
  speciality: null,
};
//4//проверка на вложенность обьекта
let user1 = {
  name: "Jorge",
  speciality: {
    developer: true,
    technology: "React",
  },
};

///вариаент решения 1
function svoustvo(object) {
  for (let key in object) {
    if (
      typeof user[key] === "object" &&
      user[key] !== null &&
      Object.entries(user).length !== 0
    ) {
      return true;
    }
  }
  return false;
}
console.log(svoustvo(user));

///вариаент решения 2
function zakolebalo(user) {
  let resultat = false;
  for (let key in user) {
    if (typeof user[key] === "object" && user[key] !== null) result = true;
  }
  return resultat;
}
console.log(zakolebalo(user));
