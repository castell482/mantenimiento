//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 5999999) => {
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    target.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

//#region - start of - number counter animation
const counterAnimTwo = (qSelector, start = 0, end, duration = 9989) => {
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    target.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};


//#endregion - end of - number counter animation

document.addEventListener("DOMContentLoaded", () => {
  counterAnim("#count1", 111, 99999);
  counterAnimTwo("#count2", 35345, 150000);
  counterAnim("#count3", 333, 9999);
  counterAnim("#count4", 4444, 999999);
});

//# read id -data info

const id = 0;
const status = false;

function getcube() {
  var documentId = document.getElementById("documentId").value;
  alert("TEST");

}

//# limint input 10 caracters
var input = document.getElementById('documentId');
input.addEventListener('input', function () {
  if (this.value.length > 10)
    this.value = this.value.slice(0, 10);
})

