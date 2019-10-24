function makeBuffer1(){
  let bufferVal = '';
    return function(val) {
      if (val === undefined) {
        return bufferVal;
      }
      bufferVal += val;
    }

}

function makeBuffer2(){
  let bufferVal = '';
  
  function innerFunc(val) {
    if (val === undefined) {
      return bufferVal;
    }
    bufferVal += val;
  }

  innerFunc.clear =  function(){
    bufferVal = '';
  }
  return innerFunc;
}


let buffer = makeBuffer2();