
// напишем класс для создания списка с возможностью выбора элементов

class MarkedList{
  // счетчик созданных списков. будет фигурировать в названии класса для его уникальности
  static listsCount = 0;
  // --------------------CONSTRUCTOR-------------------------------------
  constructor({target, listItems}){
    // lastData thisData переменные для выбора с shift для определения
    // промежутка выбора. 
    this._lastData = null;
    this._thisData = null;
    // массив с dataset.number выбранных пунктов
    this._resultList = [];

    // создаем весь список
    this._ul = this.createList(listItems);
    // определяем коллекцию с пунктами меню
    this._li = this._ul.querySelectorAll('.marked-list--itm');
    // вставляем меню в указанный тэг (target)
    this.insertList(target);
    // навешиваем обработчики.
    // этот для отключения выделения текста через shift
    this._ul.addEventListener('selectstart',(e)=>{e.preventDefault()});
    // этот для обработки кликов на пункты меню.
    this._ul.addEventListener('click', (e) =>{this.markHandler(e)});
    // счетчик созданных списков ++
    MarkedList.listsCount++;
  }

  // MET--------------------createList-------------------------------------
  createList(listItems){
    // тут все стандартно. Создаем элемент
    let ul = document.createElement('ul');
    // добавляем класс используя счетчик
    ul.classList.add(`marked-list-${MarkedList.listsCount}`);
    // добавляем переменную для нумерации элементов списка
    let dataNumber = 0;
    // создаем элементы списка
    listItems.forEach((el)=>{
      let li = document.createElement('li');
      li.textContent = el;
      // нумеруем элементы списка через dataset
      li.setAttribute('data-number', `${dataNumber}`);
      li.classList.add('marked-list--itm');
      dataNumber++;
      ul.insertAdjacentElement('beforeend', li);
    });  
    return ul;
  }

  // MET--------------------markHandler-------------------------------------
  markHandler(e){
    // стандарт. если целью не является li, то ничего
    if (!e.target.classList.contains('marked-list--itm')){
      return;
    } 
    // определение номера элемента под кликом
    this._thisData = Number(e.target.dataset.number);

    // для комбинации с шифтом
    if(e.shiftKey) {
      // определяем, какой из dataset атрибутов больше, а какой меньше
      // это сделано для выбора элементов как снизу вверх, так и сверху вниз
      // т.к. текущий номер может быть меньше предидущего
      let maxData = Math.max(this._lastData, this._thisData);
      let minData = Math.min(this._lastData, this._thisData);
      // для каждого элемента списка определяем, попадает ли он
      // в число выделенных через шифт, если да, то маркируем
      this._li.forEach((el)=>{
        // текущее значение dataset атрибута сравниваем
        // с "крайними" значениями, которые были выбраны
        let elData = Number(el.dataset.number)
        if( elData >= minData && elData <= maxData){
          this.mark(el);
        }
        
      });
      // после клика и завершения обработки текущий "кликнутый" элемент
      // становится "прошлым" для следующего события
      this._lastData = this._thisData;
      return;
    }
    // --------------CTRL---------------------------------------------
    if(e.ctrlKey) {
      // тут все просто. маркируем выделенные и пушим их dataset значения в массив
      this.mark(e.target);
      // переопределяем прошлый клик
      this._lastData = this._thisData;
      return;
    }
    // ------------SIMPLE CLICK---------------------------------------------

    // если ничего из вышеперечисленного не сработало, значит клик
    // был без шифта и ctrl
    // очищаем выделение списка
    this.clearMark(this._li);
    // маркируем элемент под кликом
    this.mark(e.target);
    // переопределяем прошлый клик
    this._lastData = this._thisData;
  }

  // MET--------------------insertList-------------------------------------
  insertList(target){
    // метод для вставки готового списка в DOM
    target.insertAdjacentElement('afterbegin', this._ul);
  }

  // MET--------------------mark for markHandler-------------------------------------
  mark(target){
    // метод маркирует элемент списка
    target.classList.add('marked');
    // и пушит значение dataset аттрибута в массив с результатами
    this._resultList.push(target.dataset.number)
  }
  
  // MET--------------------clearMark for markHandler-------------------------------------
  clearMark(list){
    // метод для очистки маркеров списка
    list.forEach((el)=>{
      el.classList.remove('marked');
    });
    // и удаления результатов из массива
    this._resultList = [];
  }

  // GET--------------------get results-------------------------------------
  get marked(){
    // геттер для результатов. 
    // преобразует массив с dataset атрибутами в список из текстовых значений пунктов списка
    let printArr = [];
    this._li.forEach((el)=>{
    let number = el.dataset.number;
    if (this._resultList.includes(number)){
      printArr.push(el.textContent);
    }
  });
  console.log(...printArr);
  }
}

let newList = {
  target: document.body,
  listItems: [
    'list_item_1',
    'list_item_2',
    'list_item_3',
    'list_item_4',
    'list_item_5',
    'list_item_6'
  ]
};

let list1 = new MarkedList(newList);



let btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
  list1.marked;
});

