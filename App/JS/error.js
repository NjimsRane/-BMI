const error1 = document.querySelector(".error1");
const error2= document.querySelector(".error2");
const error3 = document.querySelector(".error3");

const submitButton = document.querySelector(".submitButton");

const userName = document.querySelector(".userName");
const userWeight = document.querySelector(".userWeight");
const userHeight = document.querySelector(".userHeight");


submitButton.addEventListener("click",()=>{
  if (userName.value === ""){
    error1.innerText = "Please enter the full name";
    userName.style.border = "1px solid red";
    return false

    
  }else{
    error1.style.display = "none";
    userName.style.border = "none";
  }
  


  if (userHeight.value === ""){
    error2.innerText = "Please enter the height";
    userHeight.style.border = "1px solid red";
    return false;

  }else{
    error2.style.display = "none";
    userHeight.style.border = "none";
  
  }


  if(userWeight.value === ""){
    error3.innerText = "Please enter the weight";
    userWeight.style.border = "1px solid red";

    return false;
  }else{
    error3.style.display = "none";
    userWeight.style.border = "none";
  }


})