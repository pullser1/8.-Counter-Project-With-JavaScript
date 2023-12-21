const counter = document.getElementById("counter-number");
const decreaseBtn = document.querySelector(".decrease-btn");
const resetBtn = document.querySelector(".reset-btn");
const increaseBtn = document.querySelector(".increase-btn");

let Count = 0;
decreaseBtn.addEventListener("click", () => {
     counter.innerHTML = --Count;
});

resetBtn.addEventListener("click", () => {
     counter.innerHTML = 0;
     Count = 0;
});

increaseBtn.addEventListener("click", () => {
     counter.innerHTML = ++Count;
});
