const dateElement = document.querySelector(".date");

function setDate(){

  let date = new Date();

  let day = date.getDate();
  let month  = date.getMonth();
  let year = date.getFullYear();

  /* =================================In js the object date will start counting month from 0 ,it is why i have to increment month for it the be the same as in the normal calendar =================== */
  
  month++;

  /*==== date object give date as 1/1/2000 when day and month are less than 10 , i put conditions to put them like this 01/01/2000 ======*/
  
  if (day < 10) day = `0${day}`;
  if (month < 10) month = `0${month}`;
  
  dateElement.innerText = `${day} / ${month} / ${year}`
}
setDate();