exports.build = (title, pagetitle, content, scripts = []) => {
	if (scripts.length > 0)
		scripts = scripts.map(src => `<script type="text/javascript" src=${src}"></script>`.join());
	else
		scripts = "";

	const template =
	`<!doctype html>
	<html lang="en">
		<head>
		<meta charset="utf-8">
		<title>${title}</title>
		<link rel="stylesheet" href="/assets/css/style.css"/>
		</head>
		<body>
			<h1 style="margin:0 auto;text-align:center;">${pagetitle}</h1>
			<div id="content">
				${content}
				${scripts}
			</div>
		</body>
	</html>`
	return template;
}