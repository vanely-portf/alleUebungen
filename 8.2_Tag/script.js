function weiter() {
  
  const zeile = document.getElementById("wartet");

  zeile.classList.remove("platzt");
  void zeile.offsetWidth;
  zeile.classList.add("platzt");
}

const btn = document.querySelector("knopfcolor");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("knopfcolor", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
