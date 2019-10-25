const template = require('../views/template-main');
exports.get = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', "text/html");

    const content = 
    `<div style="text-align:center; margin: 0 auto; width:300px;">
        <p><input id="n1" type='text'/></p>
        <p><input id="n2" type='text'/></p>
        <p>
            <button id="mul-btn" type="button">*</button>
            <button id="div-btn" type="button">/</button>
            <button id="add-btn" type="button">+</button>
            <button id="sub-btn" type="button">-</button>
        </p>
        <p id="result">Results</p>
    </div>`

    const scripts = ['/assets/js/calculate.js'];

    const page = template.build("Fraction Calculator", "Calculate alls them fractions", content, scripts);
    
    res.write(page);
    res.end();
}