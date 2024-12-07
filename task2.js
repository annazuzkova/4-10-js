const divs = document.querySelectorAll(".div");
console.log(divs);
divs.forEach;
let counter = 1;
const animation = setInterval(() => {
  counter += 1;
  if (counter % 2 === 0) {
    divs.forEach((div) => {
      div.classList.replace("div", "div-new-color");
    });
  }
  if (counter % 2 !== 0) {
    divs.forEach((div) => {
      div.classList.replace("div-new-color", "div");
    });
  }
}, 1000);
