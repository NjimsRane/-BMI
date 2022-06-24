const container = document.querySelector(".container");

const toggleBox = document.querySelector(".toggleBox");
const toggle = document.querySelector(".toggle");
const darkButton = document.querySelector(".darkButton");
const lightButton = document.querySelector(".lightButton");

const logo = document.querySelector("#logo");


/* creating all the events needed*/ 
darkButton.addEventListener("click",moveToRight);
lightButton.addEventListener("click",moveToLeft);


/* functions to give life to event when they are needed */

function moveToRight(){
  toggle.style.left = "60%";
  toggle.style.backgroundColor = "#fff";

  toggleBox.style.border = "1px solid #fff";
  container.style.backgroundColor = "#282828";
  logo.style.color = "#fff";
}

function moveToLeft(){
  toggle.style.left = "5%";
  toggle.style.backgroundColor = "#282828";

  toggleBox.style.border = "1px solid #282828";
  container.style.backgroundColor = "#fff";
  logo.style.color = "#282828";
}