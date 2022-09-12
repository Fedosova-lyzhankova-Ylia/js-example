"use strict";
//домашнее 5
// //задание
// //1
let obj = {
  name: "Julia",
  age: "38",
  skills: "Avtocad",
};
//2
obj["person"] = "women";
obj["hobby"] = "cook";
console.log(obj);

//3
//имеющиеся свойства обьекта
const keys = Object.keys(obj);
console.log(keys);

console.log(Object.entries(obj));

//внешние данные
const values = Object.values(obj);
console.log(values);

const userFan = {
  nameSun: "Jorge",
  ageSun: 16,
  specialitySun: {
    developer: true,
    technology: "React",
  },
};

const carter = Object.assign(obj, userFan)
console.log(carter)

///4 стрелочная функция
Object.keys(obj).forEach((key) => {
  let value = obj[key];
  console.log(`${key}: ${value}`);
});

5
//проверка на вложенность обьекта
let user = {
  name: "Jorge",
  age: 12,
  speciality: {
    developer: true,
    technology: "React",
  },
};

function svoustvo(object) {
  for (let key in object) {
    if (typeof user[key] === "object") {
      return true
  }
}
return false
}
console.log(svoustvo(user))

///проверка на пустоту
let objNew = {}
function isNewObject(obj) {
  for (var i in obj) {
      if (objNew.hasOwnProperty(i)) {
          return false;
      }
  }
  return true;
}
console.log(svoustvo(objNew))
