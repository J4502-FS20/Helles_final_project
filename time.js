"use strict";


var timeDiv = document.getElementById('timeDiv');

var today = new Date();
var firstStop = new Date("December 14, 2020 17:30");

var milliseconds = today - firstStop;
var seconds = milliseconds/1000;
var minutes = seconds/60;
var hours = minutes/60;
var days = hours/24;



timeDiv.innerHTML += '<p><b>Greetings! Today is ' + today + '</b></p>';
