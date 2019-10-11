// инициализация кнопок
let goButton = document.querySelector('.btn_go');
let stopButton = document.querySelector('.btn_stop');
// инициализация интервала с функцией, отображающей часы
let inerval =  setInterval(drawClock, 1000);

// обработчики событий для кнопок
goButton.addEventListener('click', function() {
    inerval =  setInterval(drawClock, 1000);
});

stopButton.addEventListener('click', function() {
   clearInterval(inerval);
});

// функция для отображения часов
function drawClock() {
    // инициализируем целевые блоки для вывода данных
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    
    let currentTime = new Date();

    // переменные для текущих значений секунд, минут, часов приведенные к строкам
    let currentHour = `${currentTime.getHours()}`;
    let currentMinutes = `${currentTime.getMinutes()}`;
    let currentSeconds = `${currentTime.getSeconds()}`;

    // дорисовываем нули в значениях < 10
    currentHour = (currentHour.length < 2) ? `0${currentHour}` : currentHour;
    currentMinutes = (currentMinutes.length < 2) ? `0${currentMinutes}` : currentMinutes;
    currentSeconds = (currentSeconds.length < 2) ? `0${currentSeconds}` : currentSeconds;
    
    //выводим строки в блоки часов, минут, секунд 
    hours.textContent = `${currentHour}`;
    minutes.textContent = `${currentMinutes}`;
    seconds.textContent = `${currentSeconds}`;
}

