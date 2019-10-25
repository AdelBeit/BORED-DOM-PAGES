const template = require('../views/template-main');
exports.get = (req, res) => {
    res.writeHead(404, {
        'Content-Type': 'text/html'
    });
    const page = template.build("404 - Page not found", "Oh noes, it's a 404", "<p>This isn't the page you're looking for...</p>");
    res.write(page);
    res.end();
};
