const timeElement = document.querySelector(".time");

function setTime(){
  let time = new Date();

  let hrs = time.getHours();
  let mins = time.getMinutes();
  let secs  = time.getSeconds();

  let ampm;
  if (hrs > 12){
    ampm = "pm"
  }else ampm = "am";

  if(hrs > 12) hrs = hrs - 12;
  if (hrs < 10 ) hrs = `0${hrs}`;
  if (mins < 10 ) mins = `0${mins}`;
  if (secs < 10 ) secs = `0${secs}`;

  timeElement.innerText = `${hrs}:${mins}:${secs} ${ampm}`;
}
let intervallTime = setInterval(setTime,1000)