const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '29 Apr 2021';

function countdown () {
	const newYearsDate = new Date (newYears)
	const currentDate =  new Date()


	const totalSeconds = (newYearsDate - currentDate) / 1000

	const days = Math.floor(totalSeconds /3600/24)
	const hours = Math.floor(totalSeconds/3600) %24
	const mins = Math.floor(totalSeconds / 60)  % 60
	const seconds = Math.floor(totalSeconds % 60 )
	
	daysEl.innerHTML = days
	hoursEl.innerHTML = hours
	minsEl.innerHTML = mins
	secondsEl.innerHTML = seconds
}
countdown()
setInterval(countdown, 1000)

function createSnow () {
	const snowFlake = document.createElement('i');
	snowFlake.classList.add('fas')
	snowFlake.classList.add('fa-skull-crossbones')
	snowFlake.style.left = Math.random() * window.innerWidth + 'px'
	snowFlake.style.animationDuration = Math.random() *2 +3 +'s'
	snowFlake.style.opacity = Math.random();

	document.body.appendChild(snowFlake)
	setTimeout(() =>snowFlake.remove(),5000)
}
setInterval(createSnow,100)