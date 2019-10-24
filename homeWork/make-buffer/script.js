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
  function returnF(val) {
    if (val === undefined) {
      return bufferVal;
    }
    bufferVal += val;
  }
  returnF.prototype.clear = function() {
    console.log('x');
  }
  console.log(returnF);
  console.log(returnF.prototype);
  return returnF;
  // return function(val) {
  //   if (val === undefined) {
  //     return bufferVal;
  //   }
  //   bufferVal += val;
  //   this.prototype.clear = function(){
     
  //   }
  // }


}

// let a = makeBuffer1();
let b =makeBuffer2();