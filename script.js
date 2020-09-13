var mySeconds;
var intervalHandle;
var stopNow = false;
var audio = new Audio('horns.mp3');
var stopAudio = true;

function resetPage() {
	document.getElementById("inputArea").style.display = "block";
	stopNow = false;
}
function tick() {
	var timeDisplay = document.getElementById("time");

	var min = Math.floor(mySeconds / 60);
	var sec = mySeconds - (min * 60);

	if (sec < 10) {
		sec = "0" + sec;
	}

	var message = min.toString() + ":" + sec;

	timeDisplay.innerHTML = message;
	if(stopNow == true){
		clearInterval(intervalHandle);
		document.getElementById("time").innerHTML = "0:00";
		resetPage();
	}

	else if(mySeconds === 0) {
		clearInterval(intervalHandle);
		document.getElementById("TimeDiv").style.display = "none";
		document.getElementById("TimerDone").style.display = "block";
		audio.loop = true;
		audio.play();
	}
	mySeconds--;
}

function stopSound(){
	audio.pause();
	document.getElementById("TimeDiv").style.display = "block";
	document.getElementById("TimeDone").style.display = "none";
	resetPage();

}

function startCounter() {
	var myInput = document.getElementById("minutes").value;
	if (isNaN(myInput)) {
		alert("Type a valid number please");
		return;
	}
	mySeconds = myInput * 60;

	intervalHandle = setInterval(tick, 1000);

	document.getElementById("inputArea").style.display = "none";
}

function stopCounter(){
	stopNow = true;
}

window.onload = function () {
	var myInput = document.createElement("input");
	myInput.setAttribute("type", "text");
	myInput.setAttribute("id", "minutes");

	var myButton = document.createElement("input");
	myButton.setAttribute("type", "button");
	myButton.setAttribute("value", "Start Timer");

	myButton.onclick = function () {
		startCounter();
	}
	document.getElementById("inputArea").appendChild(myInput);
	document.getElementById("inputArea").appendChild(myButton);
}