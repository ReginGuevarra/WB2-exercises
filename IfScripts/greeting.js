// get current hour
let currentHour = new Date().getHours();

// display greeting based on current hour
if (currentHour <= 10) {
  console.log("Good morning!");
} else if (currentHour <= 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}
