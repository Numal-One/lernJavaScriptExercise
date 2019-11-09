function Menu(options) {
  let elem;
  
  function getElem(){
    console.log('getElem');
    if(!elem) render();
    return elem;
  }

  function render() {
    console.log('render');
    elem = document.createElement('div');
    elem.className = 'menu';

    let titleElem = document.createElement('span');
    elem.appendChild(titleElem);
    titleElem.className = 'title';
    titleElem.textContent = options.title;

    elem.onmousedown = function() {
      return false;
    }
    elem.onclick = function (event){
      console.log('onClick');
      if(event.target.closest('.title')) {
        toggle();
      }
    }
  }

  

  function renderItems() {
    let items = options.items || [];
    let list = document.createElement('ul');
    items.forEach(function(item){
      let li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    elem.appendChild(list);
  }

  function open() {
    if (!elem.querySelector('ul')){
      renderItems();
    }
    elem.classList.add('open');
  }

  function close() {
    elem.classList.remove('open');
  }

  function toggle() {
    if (elem.classList.contains('open')) {
      close();
    } else {
      open();
    }
  }

  this.getElem = getElem;
  this.toggle = toggle;
  this.close = close;
  this.open = open;

}

let menu = new Menu ({
  title: 'Сладости',
  items: [
    'Торт',
    'Пончик',
    'Пирожное',
    'Шоколадка',
    'Мороженое'
  ]
});

let elem1= menu.getElem();

document.body.insertAdjacentElement('afterbegin', elem1);
