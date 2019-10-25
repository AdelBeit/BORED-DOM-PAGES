const limit = 1;
const color = [0,0,0];
const addBy = 1;
function binaryAdd(digits,index=null){
  if(index===null){
    index = digits.length-1;
  }
  if(digits[index]<limit){
    digits[index]+=addBy;
    return digits;
  }
  else{
    digits[index]=0;
    index-=1;
    if(index<0){
      return digits;
    }
    else{
      return binaryAdd(digits,index);
    }
  }
}

var a = color;
for(var i = 0; i<(limit+1)**(color.length); i++){
  console.log(a);
  a = binaryAdd(a);
}