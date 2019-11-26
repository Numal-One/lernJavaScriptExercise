let btns = document.querySelectorAll('.btn');
let target = document.querySelector('.out');

document.addEventListener('cusEv', (e)=>{
  console.log('cusEv');
  target.textContent = `Была нажата кнопка №${e.detail}`;
});

btns.forEach((elem)=>{
  elem.addEventListener('click', (e)=> {
    console.log('click');
    e.target.dispatchEvent( new CustomEvent('cusEv',{
      detail: e.target.dataset.btnId,
      bubbles: true
    })
    );
  });
});

