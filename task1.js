const text = document.querySelector("#text");
let count = 0;
const timeCounter = setInterval(() => {
  count += 1;
  if (count === 5) {
    clearInterval(timeCounter);
  }
  text.textContent = count;
}, 1000);
