let goButton = document.querySelector('.btn_go');
let stopButton = document.querySelector('.btn_stop');
let inerval =  setInterval(drawClock, 1000);

goButton.addEventListener('click', function() {
    inerval =  setInterval(drawClock, 1000);
});

stopButton.addEventListener('click', function() {
   clearInterval(inerval);
});

function drawClock() {
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    let currentTime = new Date();

    let currentHour = `${currentTime.getHours()}`;
    let currentMinutes = `${currentTime.getMinutes()}`;
    let currentSeconds = `${currentTime.getSeconds()}`;

    currentHour = (currentHour.length < 2) ? `0${currentHour}` : currentHour;
    currentMinutes = (currentMinutes.length < 2) ? `0${currentMinutes}` : currentMinutes;
    currentSeconds = (currentSeconds.length < 2) ? `0${currentSeconds}` : currentSeconds;

    hours.textContent = `${currentHour}`;
    minutes.textContent = `${currentMinutes}`;
    seconds.textContent = `${currentSeconds}`;
}

