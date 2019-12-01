function cbFunc(src, cb){
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
  script.onload = () => cb();
  console.log('loading done');
}

let path1 = '/part1/11.3.1/test.js';

cbFunc(path1, cb1);


function cb1() {
  someFunc();
}


let promise = new Promise((resolve, reject) =>{
  let script = document.createElement('script');
  script.src = path1;
  document.head.append(script);
  script.addEventListener('load',()=>resolve());
  script.addEventListener('error',()=>reject());

});


promise
  .then(() =>{
    
    console.log(`easy promise resolve - ${someFunc()}`)
  })
  .catch(() => console.log('easy promise - error'));