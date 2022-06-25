const error1 = document.querySelector(".error1");
const error2= document.querySelector(".error2");
const error3 = document.querySelector(".error3");

const submitButton = document.querySelector(".submitButton");

const userName = document.querySelector(".userName");






submitButton.addEventListener("click",()=>{

  /*================================ full name error handler : if the full name is empty , an  message will come down to remind to fill the input=============================== */

  if (userName.value === ""){
    error1.innerText = "Please enter the full name";
    userName.style.border = "1px solid red";
    return false

    
  }else{
    error1.style.display = "none";
    userName.style.border = "none";
  }
  
/*======================= height error handler : if the full name is empty , an  message will come down to remind to fill the input=========================== */

/* i have already declared and assigned heigth and weigth varibles when calculating the BMI*/ 

  if (H.value === ""){
    error2.innerText = "Please enter the height";
    H.style.border = "1px solid red";
    return false;

  }else{
    error2.style.display = "none";
    H.style.border = "none";
  
  }

/*========================== weight error handler : if the full name is empty , an  message will come down to remind to fill the input=========================== */

  if(W.value === ""){
    error3.innerText = "Please enter the weight";
    W.style.border = "1px solid red";

    return false;
  }else{
    error3.style.display = "none";
    W.style.border = "none";
  }
})