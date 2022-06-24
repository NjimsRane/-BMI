const W = document.querySelector(".userWeight");
const H = document.querySelector(".userHeight");
let results = document.querySelector(".result");

results = (Number(W.value)/Number(H.value) **2).toFixed(2);

submitButton.addEventListener("click",resultBim);

function resultBim(){
  if (results < 18.5){
    results.innerText = "The user falls within the underweight range.";
    console.log(results);
  }
}