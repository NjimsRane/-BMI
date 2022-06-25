const W = document.querySelector(".userWeight");
const H = document.querySelector(".userHeight");
const  results = document.querySelector(".result");


submitButton.addEventListener("click",resultBim);

function resultBim(){

  /*========== i have to put the calculation inside the function ============ */

  /* inputs give value a string it is why i have to convert string to number to be able to calculate the BMI */

  /* toFixed is there to put how many numbers i want after the decimal  and here i just put 2 numbers*/

  let calcul;
  calcul = (Number(W.value)/Number(H.value) **2).toFixed(2);
  
  if (calcul < 18.5){
    results.innerText = `BIM = ${calcul}
    The user falls within the underweight range.`;
  }else if (calcul < 24.9){
    results.innerText = `BIM = ${calcul} 
    The user falls within the normal or Healthy Weight range.`;
  }else if (calcul < 29.9){
    results.innerText = `BIM = ${calcul} 
    The user falls within the overweight range.`;
  }else{
    results.innerText = `BIM = ${calcul} 
    The user falls within  the obese range`;
  }
}
