const template = require('../views/template-main');
const Canvas = require('canvas');

exports.get = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    const content = `<canvas id="sandbox"></canvas>`
    const page = template.build("Sandbox","",content);
    res.write(page);
    res.end();

    const canvas = new Canvas(300,300);
    context = canvas.getContext('2d');
    const speed = 300;
    draw(10,10,30,30);

}

const clear = () => context.clearRect(0,0,canvas.width, canvas.height);
const draw = (x,y,h,w) => {
    // erase
    clear();

    // edges
    if(x>200){
        x=10;
        y+=10;
    }else{
        x+=10;
    }
    if(y>200){
        y=10;
    }

    // draw
    context.rect(x,y,w,h);
    context.stroke();

    // redraw
    setInterval(draw, speed);
}