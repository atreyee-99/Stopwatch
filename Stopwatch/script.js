var seconds = 00;
var tens = 00; //stores centiseconds
var mins = 00;


//Displays updated values
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var appendMins = document.getElementById('mins');

var buttonStart = document.getElementById('button-start'); 
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');

var interval; 
var f = 0;

//starts timer
function startTimer(){ 
    tens++;
    if(tens<=9){
        appendTens.innerHTML = "0" + tens;
    }
    else{
        appendTens.innerHTML = tens;
    }
    if(tens>99){ //increments centiseconds if it is greater than 99
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0; 
    }
    if(seconds>9){
        appendSeconds.innerHTML = seconds;
    }
    if(seconds>59){
        mins++;
        appendMins.innerHTML = "0" + mins;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if(mins>9){
        appendMins.innerHTML = mins;
    }
}

buttonStart.onclick = function(){
    f++;
    if(f==1) //Start can be pressed only one before stopping/resetting
        interval = setInterval(startTimer); //setInterval function starts the timer
}

buttonStop.onclick = function (){
    clearInterval(interval); //stops the timer
    f=0;
}

buttonReset.onclick = function (){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    mins = "00";
    f=0;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
	appendMins.innerHTML=mins;
}