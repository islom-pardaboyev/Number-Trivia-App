let getFactBtn = document.getElementById("get-fact-btn");
let ranFactBtn = document.getElementById("ran-fact-btn");
let fact = document.querySelector(".fact");
let url = "http://numbersapi.com/";

let fetchFact = (num) => {
  let finalUrl = url + num;
  fetch(finalUrl)
    .then((resp) => resp.text())
    .then((data) => {
      fact.style.display = "block";
      fact.innerHTML = `<h2>${num}</h2>
      <p>${data}</p>`;
    });
};

let getFact = () => {
  let num = document.getElementById("num").value;
  // check if input number is not empty
  // if not empty
  if (num) {
    // check if number lies between 0 and 300
    // if Yes fetch the fact
    if (num >= 0 && num <= 300) {
      fetchFact(num);
    }
    // if number is less than 0 or greater than 300 display error massage
    else {
      alert("Please enter a number between 0 to 300.")
    }
  }
  // if input number is empty display error massage
  else {
    alert('The input field cannot be empty')
  }
};

let getRandomFact = () => {
  // random number between 0 to 300
  let num = Math.floor(Math.random() * 301);
  fetchFact(num);
};

getFactBtn.addEventListener("click", getFact);
ranFactBtn.addEventListener("click", getRandomFact);
window.addEventListener("load", getRandomFact);
