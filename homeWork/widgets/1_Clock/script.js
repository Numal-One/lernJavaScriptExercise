function Clock(){
  let clockElem;
  // переменная для id setInterval
  let timeInterval = null;
  // функция создания часов
  function createClock(){
    // если элемента еще нет, то
    if(!clockElem) {
      clockElem = document.createElement('div');
      clockElem.classList.add('clock');
      let hours = document.createElement('div');
      hours.classList.add('hours');
      hours.textContent = '00';
      let minutes = document.createElement('div');
      minutes.classList.add('minutes');
      minutes.textContent = '00';
      let seconds = document.createElement('div');
      seconds.classList.add('seconds');
      seconds.textContent = '00';
      clockElem.appendChild(hours);
      clockElem.appendChild(minutes);
      clockElem.appendChild(seconds);
    }
    return clockElem;
  }

  // функция инициализации часов
  function initialization(target){
    let elem = createClock();
    target.insertAdjacentElement('afterbegin',elem);
  }
  
  function start(){
    if(!clockElem){
      return;
    }
    drawClock();
    timeInterval = setInterval(() => {
      drawClock();
    }, 1000);
  }

  function stop() {
    clearInterval(timeInterval);
  }
  
  function drawClock() {
    // инициализируем целевые блоки для вывода данных
    let hours = clockElem.querySelector('.hours');
    let minutes = clockElem.querySelector('.minutes');
    let seconds = clockElem.querySelector('.seconds');
    
    let currentTime = new Date();

    // переменные для текущих значений секунд, минут, часов приведенные к строкам
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // дорисовываем нули в значениях < 10
    currentHour = (currentHour < 10) ? `0${currentHour}` : currentHour;
    currentMinutes = (currentMinutes < 10) ? `0${currentMinutes}` : currentMinutes;
    currentSeconds = (currentSeconds < 10) ? `0${currentSeconds}` : currentSeconds;
    
    //выводим строки в блоки часов, минут, секунд 
    hours.textContent = `${currentHour}`;
    minutes.textContent = `${currentMinutes}`;
    seconds.textContent = `${currentSeconds}`;
}
this.initialization = initialization;
this.start = start;
this.stop = stop;

}


let clock = new Clock();
clock.initialization(document.querySelector('.clock-wrapper'));



let controls = document.querySelector('.controls');

controls.addEventListener('click', ({target})=>{
  
  if(target.classList.contains('btn1')){
    clock.start();
  }
  if(target.classList.contains('btn2')){
    clock.stop();
  }
  if(target.classList.contains('btn3')){
    alert('alert');
  }
});