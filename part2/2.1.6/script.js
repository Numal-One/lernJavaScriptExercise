
let messages = document.querySelectorAll('.pane');

for (let mes of messages) {
  let btn = document.createElement('button');
  btn.className = 'remove-button';
  btn.textContent = '[x]';
  mes.insertAdjacentElement('afterbegin',btn);
}


let allMessages = document.querySelector('.messages');

allMessages.addEventListener('click', function(e){
  if (e.target.classList.contains('remove-button')) {
    e.target.closest('.pane').hidden = true;
  }
});