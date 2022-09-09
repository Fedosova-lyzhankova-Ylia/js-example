"use strict";
// ///домашнее 5
// ///задача 1
// ///фунцкия
// function firstSentence(str) {
//   return str.substring(30, -1) + "...";
// }
// console.log(firstSentence("But you have no right to call me murdered"));

// ///все решения
// let firstSentencee = "But you have no right to call me murdered"
// let secondSentence = "Because they could stand that these were not monsters";
// let thirdSentence = "And I want to remember it. I never vant to forget it.";

// console.log(firstSentencee.substring(30, -1) + "...")
// console.log(secondSentence.substring(30, -1) + "...")
// console.log(thirdSentence.substring(30, -1) + "...")

///задача 2
///1
// function registerlnvertion(str) {
//   return str.toLowerCase();
// }
// console.log(registerlnvertion("WTF"));


// let string1 = "C&C Red Alert 3";
// let string = "Be my Valentine";
// let result = registerlnv(string);
// let result1 = registerlnv(string1);

// function registerlnv(item) {
//   let letter = item.toUpperCase().split("");
//   for (let i = 0; i < letter.length; i++) {
//     if (letter[i] == item[i]) letter[i] = letter[i].toLowerCase();
//   }
//   return letter.join("");
// }
// console.log(result);
// console.log(result1);






///3
// function textObject(str) {
//   let allSymbols = str.length;
//   let symbolsWuthoutSpaces = str.replace(/\s/g, "").length;
//   let quantityofWords = str.split("").length;
//   let sentenceType = str.slice(-1);
//   if (sentenceType === "?") {
//     sentenceType = "question";
//   } else if (sentenceType === ".") {
//     sentenceType = "affirmative";
//   } else if (sentenceType === "!") {
//     sentenceType = "exclamatory";
//   } else {
//     sentenceType = null;
//   }
//   let obj = { allSymbols, symbolsWuthoutSpaces, quantityofWords, sentenceType };
//   return obj;
// }
// console.log(textObject("But you have no right to call me murdered!"));

///4
// function moderation(str) {
//     let blok = /rabbit/gi;
   
//     return str.replace(blok, '******');
//   }
//   console.log(moderation("Fallow the white raBbit"));
//   console.log(moderation("Call me Ishmael"));
//   console.log(moderation("Repent before bloody rabbit punish you!"));