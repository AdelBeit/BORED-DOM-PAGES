const https = require('https');
const creds = require('./creds');

const token = creds.token;
const groupid = creds.groupid;
const botid = creds.botid;
const port = 443;
const hostname = "api.groupme.com";
let path = '/v3/bots/post';
path = 'https://image.groupme.com/pictures'

// let [options,body] = makeBot("Village Idiot", groupid);
// makeRequest(options,body);
let [options,body] = sendMessage(bot,"hello")
makeRequest(options,body);

function makeBot(name,group){
     let options = {
          hostname: hostname,
          port: port,
          path: '/v3/bots?token='+token,
          method:'POST'
     };

     let body = JSON.stringify({
          "bot":{
               "name":name,
               "group_id":group
          }
     });  
     return [options,body];
}

function sendMessage(bot, text, attachments=[]){
     let options = {
          hostname: hostname,
          port: port,
          path: path,
          method: 'POST'
     };

     let body = JSON.stringify({
          "bot_id": bot,
          "text": text
     });

     let attachments = [
          {
               
          }
     ]

     return [options,body];
}

function makeRequest(options, body={}){
     let req = https.request(options, (res) => {
          console.log('statusCode: '+res.statusCode);
     
          res.on('data', (d) => {
               process.stdout.write(d);
          });
     });
     
     req.on('error', (error) => {
          console.error(error);
     });
     
     req.write(body);
     
     req.end();
}