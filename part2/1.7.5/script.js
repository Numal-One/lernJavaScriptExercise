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
            "яблоня": {
                'хуяблоня1':{},
                'хуяблоня2':{}
            },
            "магнолия": {}
        }
    }
  };
 

  let targ = document.querySelector('.container');
  console.log(data);
  createTree(targ, data);

  function createTree(target, obj) {
    let ul = createUl(obj);
    target.append(ul);
  }

  function createUl(obj) {
    let ul = document.createElement('ul');
    let objKeys = Object.keys(obj);
    for (let arrKey in objKeys) {
        let li = document.createElement('li');
        li.innerText = `${objKeys[arrKey]}`;
        if((typeof obj[objKeys[arrKey]]) === 'object') {
            let innerUi = createUl(obj[objKeys[arrKey]]);
            li.append(innerUi);
        }
        ul.append(li);
    }
    return ul;
  }