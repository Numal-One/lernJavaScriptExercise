let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
  };
 

  let targ = document.querySelector('.container');
  console.log(data);
  createTree(targ, data);

  function createTree(target, obj) {
    let ul = createUl(obj);
    console.log(`ul - ${ul}`);
    target.append(ul);
  }

  function createUl(obj) {
    let ul = document.createElement('ul');
    let keys = Object.keys(obj);
    for (let key in keys) {
        let li = document.createElement('li');
        li.innerText = `${keys[key]}`;
        if((typeof obj[keys[key]]) === 'object') {
            let innerUi = createUl(obj[keys[key]]);
            li.append(innerUi);
        }
        ul.append(li);
    }
    return ul;
  }