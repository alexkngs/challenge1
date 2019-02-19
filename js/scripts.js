var shipvalues = {
	fuel: 90,
	distance: 500,
	food: 50,
	miles: 0
}

function fuel() {
	
document.getElementById('flevel').style.width = shipvalues.fuel + '%';
}

function food() {
	
document.getElementById('folevel').style.width = shipvalues.food + '%';
}

function distance() {
	
document.getElementById('dtrav').innerHTML = shipvalues.distance;
}

function LengthConverter(valNum) {
  document.getElementById("outputMarsMiles").innerHTML=valNum*1.5;
}
