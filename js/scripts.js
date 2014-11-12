var task_1 = {
	name : "",
	date : ""
}

var start = 0
var end = 0
var diff = 0
var timerID = 0

function chrono(id){
	end = new Date()
	diff = end - start
	diff = new Date(diff)

	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1

	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	console.log("task-time-" + id)
	document.getElementById("task-time-" + id).innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono("+id+")", 10)
}

function chronoStart(id){
	console.log('start')
	document.getElementById("startPause-" + id).innerHTML = "Pause"
	document.getElementById("startPause-" + id).onclick = function() {chronoPause(id)}
	document.getElementById("reset-" + id).onclick = function() {chronoReset(id)}
	start = new Date()
	chrono(id)
}

function chronoContinue(id){
	document.getElementById("startPause-" + id).innerHTML = "Pause"
	document.getElementById("startPause-" + id).onclick = function() {chronoPause(id)}
	document.getElementById("reset-" + id).onclick = function() {chronoReset(id)}
	start = new Date()-diff
	start = new Date(start)
	chrono(id)
}

function chronoReset(id){
	console.log('reset')
	document.getElementById("task-time-" + id).innerHTML = '0:00:00:000'
	start = new Date()
}

function chronoPauseReset(id){
	document.getElementById("task-time-" + id).innerHTML = '0:00:00:000'
	document.getElementById("startPause-" + id).onclick = function() {chronoStart(id)}
}

function chronoPause(id){
	document.getElementById("startPause-" + id).innerHTML = "Start"
	document.getElementById("startPause-" + id).onclick = function() {chronoContinue(id)}
	document.getElementById("reset-" + id).onclick = function() {chronoPauseReset(id)}
	clearTimeout(timerID)
}