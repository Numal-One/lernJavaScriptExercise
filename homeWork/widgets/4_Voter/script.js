class Voter {
  constructor(target){
    this._counter = 0;
    this._target = target;
    this._voter = this._createBlock();
    this._voterField = this._voter.querySelector('.vote');
    this._addEvListener(this._voter);
    this._insertBlock(this._voter, this._target);
  }

  // метод для создания блока
  _createBlock() {
    let voter = document.createElement('div');
    voter.id = 'voter';
    voter.className = 'voter';
    let minus = document.createElement('span')
    minus.className = 'down';
    minus.textContent = '-';
    let plus = document.createElement('span');
    plus.className = 'up';
    plus.textContent = '+';
    let voteCount = document.createElement('span');
    voteCount.className = 'vote';
    voteCount.textContent = 0;
    voter.insertAdjacentElement('beforeend', minus);
    voter.insertAdjacentElement('beforeend', voteCount);
    voter.insertAdjacentElement('beforeend', plus);
    return voter;
  }

  // метод для вставки блока в целевой блок
  _insertBlock(block, target){
    target.insertAdjacentElement('afterbegin', block);
  }

  // метод вешает на блок обработчик
  _addEvListener(targetBlock){
    targetBlock.addEventListener('click',({target})=>{
      this._clickHandler(target);
    });
    
  }

  // функция обработчик
  _clickHandler(target){
    if (!target.classList.contains('up') && !target.classList.contains('down')) {
      return;
    }

    if (target.classList.contains('up')) {
      this._counter++;
      this._renewCount()
      return;
    }

    if (target.classList.contains('down')) {
      this._counter--;
      this._renewCount()
      return;
    }

  }

  // функция обновления счетчика. обновляет текст в блоке согласно переменной
  _renewCount() {
    this._voterField.textContent = this._counter;
  }

  // сеттер для голосов
  set setVote(count){
    if(typeof count !== "number"){
      return;
    }
    this._counter = count;
    this._renewCount();
  }

}

let target = document.querySelector('.target')
let newVoter1 = new Voter(target);
let newVoter2 = new Voter(target);