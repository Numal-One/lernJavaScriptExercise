function Clock(){
  let clockElem;
  // переменная для id setInterval
  let timeInterval = null;
  // функция создания часов

}

Clock.prototype.initialization = function(target){
  console.log('init');
  this.createClock();
  target.insertAdjacentElement('afterbegin',this.clockElem);
}

Clock.prototype.createClock = function(){
  console.log('create');
  // если элемент есть, то ретурн
  if(this.clockElem) {
    return;
  }
  this.clockElem = document.createElement('div');
  this.clockElem.classList.add('clock');
  let hours = document.createElement('div');
  hours.classList.add('hours');
  hours.textContent = '00';
  let minutes = document.createElement('div');
  minutes.classList.add('minutes');
  minutes.textContent = '00';
  let seconds = document.createElement('div');
  seconds.classList.add('seconds');
  seconds.textContent = '00';
  this.clockElem.appendChild(hours);
  this.clockElem.appendChild(minutes);
  this.clockElem.appendChild(seconds);
}

Clock.prototype.start = function(){
  if(!this.clockElem){
    console.log('return');
    return;
  }
  this.drawClock();
  this.timeInterval = setInterval(() => {
    this.drawClock();
  }, 1000);
}


Clock.prototype.stop = function() {
  clearInterval(this.timeInterval);
}

Clock.prototype.drawClock = function() {
  // инициализируем целевые блоки для вывода данных
  let hours = this.clockElem.querySelector('.hours');
  let minutes = this.clockElem.querySelector('.minutes');
  let seconds = this.clockElem.querySelector('.seconds');
  
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