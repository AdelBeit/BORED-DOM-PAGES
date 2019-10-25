const template = require('../views/template-main');
exports.get = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', "text/html");

    const content = 
    `<div>
        <canvas id="paletteBox" width='400' height='10'></canvas>
    </div>`;
    const scripts = ['/assets/js/palette.js'];

    const page = template.build('Color Palette', "Color Picker", content);

    res.write(page);
    res.end();
}