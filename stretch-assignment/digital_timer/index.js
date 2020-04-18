const secondTens = document.querySelector("div#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const colon = document.querySelector("#colon");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

//COUNTER
let count = 0;
const counter = () => (count += 1);

//TIME PASSED INTERVAL
let digitFinder = msNum => {
	return Math.floor(count / msNum)
		.toString()
		.split("")
		.pop();
};

const timePassed = () => {
	timePassedID = setInterval(() => {
		counter();
		secondTens.textContent = digitFinder(1000);
		secondOnes.textContent = digitFinder(100);
		msHundreds.textContent = digitFinder(10);
		msTens.textContent = digitFinder(1);
		if (count === 1000) {
			pause();
			startBtn.disabled = true;
			[secondTens, secondOnes, colon, msHundreds, msTens].forEach(
				item => (item.style.color = "red")
			);
		}
	}, 10);
};

//BUTTONS
const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const resetBtn = document.querySelector(".reset-btn");

window.addEventListener("load", () => {
	pauseBtn.disabled = true;
	resetBtn.disabled = true;
});

startBtn.addEventListener("click", () => {
	start();
});

pauseBtn.addEventListener("click", () => {
	pause();
});

resetBtn.addEventListener("click", () => {
	reset();
});

//ACTIONS
const start = () => {
	timePassed();
	startBtn.disabled = true;
	resetBtn.disabled = true;
	pauseBtn.disabled = false;
};

const pause = () => {
	clearInterval(timePassedID);
	startBtn.disabled = false;
	resetBtn.disabled = false;
	pauseBtn.disabled = true;
};

const reset = () => {
	secondTens.textContent = "0";
	secondOnes.textContent = "0";
	msHundreds.textContent = "0";
	msTens.textContent = "0";
	count = 0;
	startBtn.disabled = false;
	[secondTens, secondOnes, colon, msHundreds, msTens].forEach(
		item => (item.style.color = "black")
	);
};