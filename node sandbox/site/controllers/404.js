const template = require('../views/template-main');
exports.get = (req, res) => {
	res.statusCode = 404;
	res.contentType = 'text/html';
	const page = template.build("404 - Page not foudn", "404! 404!", "<p>This ain't it chief</p>");
	res.write(page);
	res.end();
}