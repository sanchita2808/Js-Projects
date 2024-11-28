let cursor = document.querySelector(".cursor");
let start = document.getElementById('btnStart');
let restart = document.getElementById('btnRestart');
let gameStart = document.getElementById('game-start');
let gameOver = document.getElementById('game-over');
let bee = document.getElementById("bee");
let highScore = document.querySelector("#highScore");
let timeLeft = document.getElementById("timeLeft");
let hits = document.getElementById("hits");
let container = document.getElementById("bee-container");
let blood = document.querySelector('.blood');
let highestScore = localStorage.getItem('highScore') || 0;
let btn = document.querySelector('button');
let score = document.getElementById('score');
highScore.textContent = highestScore;
let idBeeMove;
let containerHeight = container.offsetHeight;
let containerWidth = container.offsetWidth;

start.addEventListener('click',()=>{
gameStart.style.display = 'none';
let x = Math.random() * (containerWidth - 90);
let y = Math.random() * (containerHeight - 98);
bee.style.top = `${y}px`;
bee.style.left = `${x}px`;
bee.style.display = 'block';
idBeeMove = setInterval(() => {
if (time == 0) {
  if(hit>highestScore){
highestScore = hit;
localStorage.setItem('highScore', highestScore);
highScore.textContent = highestScore;
}
score.textContent = hit;
hit = 0;

hits.textContent = hit;
gameOver.style.display = 'flex'
bee.style.display= 'none'
blood.style.display='none'
clearInterval(idBeeMove);
} else {
blood.style.display= 'none';
time--;
timeLeft.textContent = time;
beeMove();
}
}, 3000);
});
restart.addEventListener('click',()=>{
    gameOver.style.display = 'none';
    time = 5;
    timeLeft.textContent= time;
    let x = Math.random() * (containerWidth - 90);
    let y = Math.random() * (containerHeight - 98);
    bee.style.top = `${y}px`;
    bee.style.left = `${x}px`;
    bee.style.display = 'block';
    idBeeMove = setInterval(() => {
    if (time == 0) {
      if(hit>highestScore){
    highestScore = hit;
    localStorage.setItem('highScore', highestScore);
    highScore.textContent = highestScore;
    }
score.textContent = hit;

    hit = 0;
    hits.textContent = hit;
    gameOver.style.display = 'flex';
    clearInterval(idBeeMove);
    } else {
    blood.style.display= 'none';
    time--;
    timeLeft.textContent = time;
    beeMove();
    }
    }, 3000);
});
let time = 5;
let hit = 0;
hits.textContent = hit;
timeLeft.textContent = time;
function beeMove() {
x = Math.random() * (containerWidth - 90);
y = Math.random() * (containerHeight - 98);

bee.style.top = `${y}px`;
bee.style.left = `${x}px`;
}
bee.addEventListener('click',()=>{
  let x= bee.offsetLeft;
  let y = bee.offsetTop;
  console.log(`${x} ${y}`);
  blood.style.display = 'block';
  blood.style.top = `${y}px`;
  blood.style.left = `${x}px`
hit++;
hits.textContent =hit;
})
document.addEventListener("mousemove", (e) => {
let x = e.pageX;
let y = e.pageY;
cursor.style.top = `${y}px`;
cursor.style.left = `${x}px`;
});