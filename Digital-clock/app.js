const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function time() {
  const date = new Date();

  let hours = date.getHours();
  hours = hours % 12;

  if (hours === 0) {
    hours = 12;
  }

  hour.innerText = hours.toString().padStart(2, "0");
  min.innerText = date.getMinutes().toString().padStart(2, "0");
  sec.innerText = date.getSeconds().toString().padStart(2, "0");
}

setInterval(() => {
  time();
}, 1000);
time();
