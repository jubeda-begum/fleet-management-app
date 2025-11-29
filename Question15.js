let seconds = 5;
console.log("Countdown started...");
let timer = setInterval(() => {
  console.log(seconds);
  seconds--;
  if (seconds < 0) {
    clearInterval(timer);
    console.log("Countdown Complete!");
  }
}, 200); 
