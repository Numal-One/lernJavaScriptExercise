class Slider{
  // конструктор
  constructor() {
    this.slider = null;
    this.thumb = null;
    // ширина слайдера
    this.sliderWidth = 0;
    // отступ слева для слайдера
    this.offsetLeft = 0;
    // ширина ползунка
    this.thumbWidth = 0;
  }

  // метод для создания элемента
  createSliderElement() {
    // если еще нет этого элемента, то делаем
    if(!this.slider){
      let slider = document.createElement('div');
      slider.classList.add('slider');
      slider.id = 'slider';
      let thumb = document.createElement('div');
      thumb.classList.add('thumb');
      slider.insertAdjacentElement('afterbegin', thumb);
      this.slider = slider;
      this.thumb = thumb;
    }
    return this.slider;
  }

  // функция вставки салйдера в DOM
  insertSlider(target) {
    target.insertAdjacentElement('afterbegin',this.slider);
  }
  
  // функция для обработчика событий движения мышью
  // передает координаты мыши в функцию позиционирования ползунка
  onMouseMove = (e) =>{
    this.moveThumb(e.clientX);
  }
  
  // функция позиционирования ползунка в слайдере
  moveThumb(x){
    let left = x - this.offsetLeft;
    if (left < 0) {
      left = 0;
    }
    if (left > this.sliderWidth - this.thumbWidth) {
      left = this.sliderWidth - this.thumbWidth;
    }
    this.thumb.style.left = left + 'px';
  }

  // функция инициализации слайдера
  init (target = document.body) {
    // создать элемент слайдера
    this.createSliderElement();
    // вставить элемент слайдера в тэг target( по дефолту в боди)
    this.insertSlider(target);
    // вычислить некоторые свойства
    // отступ слева до слайдера
    this.offsetLeft = this.slider.offsetLeft;
    // ширина слайдера
    this.sliderWidth = this.slider.offsetWidth;
    // ширина ползунка
    this.thumbWidth = this.thumb.offsetWidth;
    // прикрепляем обработчик события нажатия мыши
    this.slider.addEventListener('mousedown', (e) => {
      // если нажание не на ползунок, ничего не делаем
      if(e.target !== this.thumb) {
        return;
      }
      // добавляем событие при перемещении мыши запускаем функцию 
      // для передачи координат мыши в функцию позиционирования ползунка
      document.addEventListener('mousemove', this.onMouseMove);
      // при отпускании кнопки мыши удаляем событие onmousemove
      document.addEventListener('mouseup', ()=>{
        document.removeEventListener('mousemove', this.onMouseMove);
      });
    
    });
  }
}

// создаем экземпляр класса
let slider = new Slider;
// выполняем его инициализацию
slider.init();
