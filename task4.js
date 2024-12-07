const input = document.querySelector("#input");
const timeOk = document.querySelector("#timeOk");
const timeHandler = () => {
  if (input.value !== "") {
    setTimeout(() => {
      alert(`Пройшло ${input.value} cекунди`);
    }, `${parseFloat(input.value)}000`);
  }
};
timeOk.addEventListener("click", timeHandler);
