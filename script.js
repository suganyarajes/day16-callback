function countdown(callback) {
  let countdownElement = document.getElementById('countdown');
  countdownElement.innerText = "Starting countdown...";

  let count = 10;

  function updateCountdown() {
    countdownElement.innerText = count;
    if (count > 0) {
      count--;
      setTimeout(updateCountdown, 1000);
    } else {
      callback();
    }
  }

  updateCountdown();
}

function displayMessage() {
  let messageElement = document.getElementById('message');
  messageElement.innerText = "Happy Independence Day!";
}
countdown(displayMessage);