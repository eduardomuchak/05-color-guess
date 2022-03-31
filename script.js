//CONSTANTES:
let balls = document.getElementsByClassName('ball');

//REQUISITO 4:
function randomColors() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

window.onload = function randomBallColor () {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomColors();
  }
}

