function work(a, b) {
  console.log( `result - ${a + b}` );
}

function spy(f){
  let log = '';
  function result(a,b) {
    let fArgs = '' + a +',' + b;
    log += `Call: (${fArgs}) `;
    return f(a,b);
  }
  result.calls = () => console.log(`log - ${log}`);
  return result;
}

work = spy(work);



work(1, 2);
work(4, 5); 
work(45, 5); 
work(41, 56); 
work(313, 2); 
work(411, 34); 

work.calls();