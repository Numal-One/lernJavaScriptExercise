class Voter {
  constructor(target){
    this._counter = 0;
    this._target = target;
    this._voter = this._createBlock();
    this._addEvListener(this._voter);
    this._insertBlock(this._voter, this._target);
  }

  _createBlock() {
    console.log('create');
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

  _insertBlock(block, target){
    console.log('insert');
    target.insertAdjacentElement('afterbegin', block);
  }

  _addEvListener(targetBlock){
    console.log('addEvent');
    targetBlock.addEventListener('click',({target})=>{
      this._clickHandler(target);
    });
    
  }

  _clickHandler(target){

    if (!target.classList.contains('up') && !target.calssList.contains('down')) {
      console.log('return');
      return;
    }

    let voter = this.voter;

    if (target.classList.contains('up')) {
      console.log('up');
      return;
    }

    if (target.calssList.contains('down')) {
      console.log('down');
      return;
    }

  }

}



let target = document.querySelector('.target')

let newVoter = new Voter(target);