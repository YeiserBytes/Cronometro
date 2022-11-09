const btnstop = document.querySelector('.btnStop')
const btnstart = document.querySelector('.btnStart')
const btnreset = document.querySelector('.btnReset')
const time = document.getElementById('time')

window.onload = init;

function init() {
	btnstart.addEventListener('click', crono);
	btnstop.addEventListener('click', stop)
	btnreset.addEventListener('click', reset);

	h = 0;
	m = 0;
	s = 0;

	time.innerHTML = '00:00:00';
}

function crono() {
	Write();

	id = setInterval(Write, 1000);
	btnstart.removeEventListener('click', crono)
}

function Write() {
	var Haux, Maux,Saux;
	s++;
	if (s > 59) {
		m++;
		s = 0;
	} else if (m > 59) {
		h++;
		m = 0;
	} else 	if (h > 24) {
		h = 0;
	} else 	if (s < 10) {
		Saux = "0" + s;
	} else {
		Saux = s;
	}

	if (m < 10) {
		Maux = "0" + m;
	} else {
		Maux = m;
	}
	
	if (h < 10) {
		Haux = "0" + h;
	} else {
		Haux = h;
	}

	time.innerHTML = Haux + ':' + Maux + ':' + Saux;
}

function stop() {
	clearInterval(id);
	btnstart.addEventListener("click", crono)
}

function reset() {
	clearInterval(id);
	time.innerHTML = "00:00:00";
	h = 0;
	m = 0;
	s = 0;
	btnstart.addEventListener("click", crono)
}