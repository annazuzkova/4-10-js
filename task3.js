// Елементи
const rulls = document.querySelector(".rulls");
const circle = document.querySelector("#circle");
const button = document.querySelector(".button");
const timer = document.querySelector(".timer");
const time = document.querySelector(".time");
const points = document.querySelector(".points");
const account = document.querySelector(".account");
// Рахунки
let counter = 0;
let point = 0;
let statusPlay = "rullShow";
let figureStatus = 1;
// Масиви тексту
const rullsArray = [
  "На гру данно 30с",
  `Тиснути треба лише на <span class="span">кружечок</span>`,
  `Тільки на <span class="span">кружечок</span>`,
  "Лише на нього",
  "Зрозуміло?",
  `Тоді <span class="span">"Поїхали"</span>`,
];
//Функції
const playStart = () => {
  // Вивод правил
  if (counter < rullsArray.length) {
    rulls.innerHTML = rullsArray[counter];
    if (counter < 5) {
      button.textContent = "Зрозуміло";
    }
    if (counter === 5) {
      button.textContent = "Поїхали!";
      timer.classList.remove("hidden");
      account.classList.remove("hidden");
    }
    counter += 1;
    // Початок гри
    if (counter === rullsArray.length) {
      rulls.textContent = "Почали";
      statusPlay = "play";
      //   Рандомайзер
      const randomFigure = setInterval(() => {
        figureStatus = Math.floor(Math.random() * 11);
        if (parseInt(time.textContent) === 0) {
          clearInterval(randomFigure);
        }
      }, 3000);
      //   Таймер
      const countdown = setInterval(() => {
        time.textContent = parseInt(time.textContent) - 1;
        if (parseInt(time.textContent) === 0) {
          statusPlay = "stop";
          clearInterval(countdown);
          clearInterval(randomFigure);
          rulls.innerHTML = `Ваш результат = <span class='span'>${point}</span>`;
        }
      }, 1000);
    }
  }
};
const playClick = () => {
  if (counter === rullsArray.length && statusPlay === "play") {
    if (figureStatus % 10 !== 0) {
      point += 1;
      points.textContent = point;
    }
    if (figureStatus % 10 === 0) {
      circle.classList.replace("circle", "square");
      point -= 1;
      points.textContent = point;
      rulls.innerHTML = `<span class="span">ХАХАХАХАХАХАХАХАХАХАХАХА</span>`;
      setTimeout(() => {
        circle.classList.replace("square", "circle");
        rulls.textContent = "Уважніше!";
      }, 3000);
    }
  }
};
//Виклик функції
button.addEventListener("click", playStart);
circle.addEventListener("click", playClick);
