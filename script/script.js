'use strict'

let isNumber = function (n) {

  return !isNaN(parseFloat(n)) && isFinite(n);
};

function randomInteger(min, max) {

  return Number(Math.round(min + Math.random() * (max + 1 - min)));

};
let resNumb = randomInteger(1, 100);

let userResponse = function () {

  let reply = +prompt("Угадай число от 1 до 100");

  if (!isNumber(reply)) {
    alert("Введи число!");
    userResponse();
  } else if (reply === 0) {
    alert("Эх...");
  } else if (reply > resNumb) {
    alert("Загаданное число меньше");
    userResponse();
  } else if (reply < resNumb) {
    alert("Загаданное число больше");
    userResponse();
  } else if (reply === resNumb) {
    alert("Верно!!!");
  };

  return reply;
};
userResponse();

