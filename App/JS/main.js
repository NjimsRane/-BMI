//====================variable declarations and assignment=======================

const container = document.querySelector(".container");

const toggleBox = document.querySelector(".toggleBox");
const toggle = document.querySelector(".toggle");
const darkButton = document.querySelector(".darkButton");
const lightButton = document.querySelector(".lightButton");

const logo = document.querySelector("#logo");
const box = document.querySelector(".box");



/*==================creating all the events needed================================*/ 
darkButton.addEventListener("click",moveToRight);
lightButton.addEventListener("click",moveToLeft);


/*======= functions to give life to event when they are needed ========*/

/* ==========================action to move the toggle to right and change the background darker============================= */

function moveToRight(){
  toggle.style.left = "60%";
  toggle.style.backgroundColor = "#fff";
  toggleBox.style.border = "1px solid #fff";
  
  container.style.backgroundColor = "#282828";
  
  logo.style.color = "#fff";

  box.style.color = "#fff";
  box.style.border = "2px solid #fff";
  
  results.style.color = "teal"
}

/*=================================== action to move the toggle to left and change the background lighter ===================================*/

function moveToLeft(){
  toggle.style.left = "5%";
  toggle.style.backgroundColor = "#282828";
  toggleBox.style.border = "1px solid #282828";
  
  container.style.backgroundColor = "#fff";
  
  logo.style.color = "#282828";

  box.style.color = "#282828";
  box.style.border = "2px solid #282828" ;
  
  results.style.color = "#8d0606";
}