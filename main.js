const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

function doStep1() {
  alice1.animate(aliceTumbling, aliceTiming);
}

function doStep2() {
  alice2.animate(aliceTumbling, aliceTiming);
}

function doStep3() {
  alice3.animate(aliceTumbling, aliceTiming);
}

doStep1();
setTimeout(doStep2, aliceTiming.duration);
setTimeout(doStep3, aliceTiming.duration*2);