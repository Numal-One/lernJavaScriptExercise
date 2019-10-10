function createUl (target) {
    let ul = document.createElement('ul');
    while(true) {
        let liText = prompt('введите содержимое пункта', 'some text');
        if (liText === null || liText === '') {
            break;
        }
        let li = document.createElement('li');
        li.innerText = liText;
        ul.append(li);
    }
    target.append(ul);
}

let targ = document.querySelector('.container');

createUl(targ);

