let incrementButton = document.querySelector(".increment");
changeColorButton = document.querySelector(".change-color");
const numberTxt = document.querySelector(".number");
let counter = 0;

numberTxt.innerText = counter;

incrementButton.addEventListener('click', function(e) {
  counter++;
  numberTxt.innerText = counter;
})

changeColorButton.addEventListener('click', function(e) {
  numberTxt.style.color != "red" ?
  numberTxt.style.color = "red" :
  numberTxt.style.color = "black";
})