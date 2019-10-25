const url = require('url');
const fs = require('fs');

exports.get = (req, res) => {
  req.requrl = url.parse(req.url, true);
  const path = req.requrl.pathname;
  const checkFile = (fileExt) => {
    return new RegExp(".("+fileExt+")$").test(path);
  };
  const sendFile = (contentType) => {
    res.statusCode = 200;
    res.contentType = "text/"+contentType;
    fs.readFile(__dirname + path, 'utf8', (err, data) => {
      if(err) throw err;
      res.write(data, 'utf8');
      res.end();
    });
  }

  if(checkFile("css"))
    sendFile("css");
  else if(checkFile("js"))
    sendFile("javascript");
  else 
    switch(path){
      case '/':
        require('./controllers/home').get(req, res);
        break;
      case '/home':
        require('./controllers/home').get(req, res);
        break;
      case '/draw':
        require('./controllers/draw').get(req, res);
        break;
      case '/calculator':
        require('./controllers/calculator').get(req, res);
        break;
      case '/calculate':
        require('./controllers/calculator').get(req, res);
        break;
      case '/palette':
        require('./controllers/palette').get(req, res);
        break;
      case '/differences':
        require('./controllers/textDiff').get(req, res);
        break;
      default:
        require('./controllers/404').get(req, res);

    } 
};