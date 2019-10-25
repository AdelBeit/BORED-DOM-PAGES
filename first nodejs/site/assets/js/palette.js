const paletteBox = document.getElementById('paletteBox');
const limit = 256;
const color = [0];
const incrementBy = 1;
// increment a binary number 
function binaryAddSome(digits,index=null){
    if(index===null){
        index = digits.length-1;
    }
    if(digits[index]<limit){
        digits[index]+=incrementBy;
        return digits;
    }

}
function dot(r,g,b,x=0,y=0) {
    this.size = 10;
    this.color = `rgb(${r},${g},${b})`;
    this.toString = () => {return {
        "cord":[this.x,this.y],
        "color":this.color
    }};
    this.x = x;
    this.y = y;
};

function * palette(numbers=[0],index=0,limit=1){
    while(true){
        // return current state
        yield numbers;
        if(numbers[index]<limit){
            // add 1 to current
            numbers[index]+=1;
        } else{

        }
    }
};
let p = palette();
let result = p.next();
console.log(p.next().value);
console.log(p.next().value);
console.log(p.next().value);
// while(!result.done){
//     console.log(result.value);
//     result = p.next();
// }

function * generateColors(r=0,g=0,b=0) {
    let x=0,y=0;
    
};