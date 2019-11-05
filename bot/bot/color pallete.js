const limit = 256;
const color = [0];
const incrementBy = 1;
function incrementUp(binls,index=null){
  if(index===null){
    index = binls.length-1;
  }
  if(binls[index]<limit){
    binls[index]+=incrementBy;
    return binls;
  }
  // if last num is 1
  else{
    binls[index]=0;
    index-=1;
    if(index>=0){
      return incrementUp(binls,index);
    }
    else{
      return binls;
    }
  }
}

var palette = [];
let newcolor = color;
for(var i=0;i<(limit+1)**(color.length);i++){
  newcolor = incrementUp(newcolor);
  palette.push([...newcolor]);
}
console.log(palette);
// function* fibonacci() {
//     var fn1 = 0;
//     var fn2 = 1;
//     while (true) {  
//       var current = fn1;
//       fn1 = fn2;
//       fn2 = current + fn1;
//       var reset = yield current;
//       if (reset===1) {
//           fn1 = 0;
//           fn2 = 1;
//       }
//     }
//   }

//   var sequence = fibonacci();
//   console.log(sequence.next().value);     // 0
//   console.log(sequence.next().value);     // 1
//   console.log(sequence.next().value);     // 1
//   console.log(sequence.next().value);     // 2
//   console.log(sequence.next().value);     // 3
//   console.log(sequence.next().value);     // 5
//   console.log(sequence.next().value);     // 8
//   console.log(sequence.next("1").value); // 0
//   console.log(sequence.next().value);     // 1
//   console.log(sequence.next().value);     // 1
//   console.log(sequence.next().value);     // 2