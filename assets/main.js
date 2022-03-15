// get the countdown h2
const countdownEl = document.querySelector(".countdown");

// Generate a date for April 1st 2022 at 3:00pm
const deadline = new Date("April 1, 2022 15:00:00");

function updateCountdown() {
  // Get the current time
  const currentDate = new Date();

  //   Calculate the difference between the current time and the deadline
  const diff = deadline - currentDate;
  // output the days, hours, and minutes to a string
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  // Output the string to the page
  countdownEl.innerHTML = `
  <p>The store is open for...</p>
  <h2>${days}d ${hours}h ${minutes}m ${seconds}s</h2>
  `;
}

setInterval(updateCountdown, 1000);
