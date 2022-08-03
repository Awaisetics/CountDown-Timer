const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');

const dateAndTime = document.querySelector('#dateAndTime');

let countDownDateAndTime = 0;

let timeZoneOffset = (new Date()).getTimezoneOffset() * 60000;
let localISOTime = (new Date(Date.now() - timeZoneOffset)).toISOString().slice(0, 19);

dateAndTime.defaultValue = localISOTime;
dateAndTime.min = localISOTime;

dateAndTime.oninput = e => {

  countDownDateAndTime = new Date(e.target.value).getTime();

  let x = setInterval(function() {

    let currentTime = new Date().getTime();
    let remainingTime = countDownDateAndTime - currentTime;
    if (remainingTime < 0){
      remainingTime = 0;
    }
    calculateTime( remainingTime);
  
    if (remainingTime < 1) {
      clearInterval(x);
      document.getElementById("timeUP").innerHTML = "Time Up";
    }
  
  }, 1000);
  
}

const calculateTime = (remainingTime) => {
  let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  constructHTML (days , hours , minutes , seconds);
}

const constructHTML = (days , hours , minutes , seconds) => {
  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
}