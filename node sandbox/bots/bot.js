/* eslint-disable no-unused-vars */
require('dotenv').config();
const https = require('https');
const fs = require('fs');

const TOKEN = process.env.TOKEN;
const GROUPID = process.env.GROUPID;
const BOTID = process.env.BOTID;
const PORT = 443;
const HOSTNAME = "api.groupme.com";

let getGroupIDReq = () => {
  return {
    options: {
      hostname: HOSTNAME,
      port: PORT,
      path: '/v3/groups?token=' + TOKEN,
      method: 'GET'
    }
  }
}

// returns all groupIDs in a JSON format
function getGroupID(){
  const req = https.request(getGroupIDReq().options, (res) => {
    res.on('data', (d) => {
      // d is the response of the request
      process.stdout.write(d);
    });
  });
  
  req.on('error', (e) => {
    console.error(e);
    console.log();
  });
  
  req.end();
}

let makeBotReq = (name = "Olive") => {
  return {
    options: {
      hostname: HOSTNAME,
      port: PORT,
      path: '/v3/bots?token=' + TOKEN,
      method: 'POST',
      headers: {
        'X-Access-Token': TOKEN,
        'Content-Type': 'text/json'
      }
    },
    body: {
      bot: {
        name: name,
        group_id: GROUPID
      }
    }
  }
}

function makeBot(botName="Jello"){
  const req = https.request(makeBotReq(botName).options, (res) => {
    res.on('data', (d) => {
      // d is the response of the request
      process.stdout.write(d);
    });
  });
  
  req.on('error', (e) => {
    console.error(e);
    console.log();
  });
  
  req.end(makeBotReq(botName).body);
}

let sendMessageReq = (text = "PIZZA") => {
  return {
    options: {
      hostname: HOSTNAME,
      port: PORT,
      path: '/v3/bots/post',
      method: 'POST'
    },
    body: {
      text: text,
      bot_id: BOTID
    }
  }
}

function sendMessage(message){
  const req = https.request(sendMessageReq(message).options, (res) => {
    res.on('data', (d) => {
      // d is the response of the request
      process.stdout.write(d);
    });
  });
  
  req.on('error', (e) => {
    console.error(e);
    console.log();
  });
  
  req.end(sendMessageReq(message).body);
}

let sendLocReq = (
  loc = {type: "location",lng: 40,lat: 70,name: "Apple Farm"},
  text = "tally ho"
  ) => {
  return {
    options: sendMessageReq().options,
    body: {
      bot_id: BOTID,
      text: text,
      attachments: [{
        type: loc.type,
        lng: loc.lng,
        lat: loc.lat,
        name: loc.name
      }]
    }
  }
}

function sendLoc(longitude,latitude,name,type="location"){
  const loc = {
    type: type,
    lng: longitude,
    lat: latitude,
    name: name
  };
  const req = https.request(sendLocReq(loc).options, (res) => {
    res.on('data', (d) => {
      // d is the response of the request
      process.stdout.write(d);
    });
  });
  
  req.on('error', (e) => {
    console.error(e);
    console.log();
  });
  
  req.end(sendLocReq(loc).body);
}

let ImageURLReq = () => {
    return {
    options: {
      hostname: 'image.groupme.com',
      port: PORT,
      path: '/pictures',
      method: 'POST',
      headers: {
        'X-Access-Token': TOKEN,
        'Content-Type': 'image/jpeg'
      }
    }
  };
}

// upload an image to groupme servers and grab url
function getImageURL(imageName='capture.jpeg'){
  // upload the image with this request
  const req = https.request(ImageURLReq().options, (res) => {
    res.on('data', (d) => {
      // process.stdout.write(d);
      // grab the url from the response
      let url = JSON.parse(d.toString()).payload.picture_url;
      // post the image to the chat using a new request
      postImage(url);
    });
  });
  
  req.on('error', (e) => {
    console.error(e);
    console.log();
  });
  
  // read the image file and send the data as the req body
  fs.readFile(imageName, (err, data) => {
    if (err) throw err;
    req.end(data);
  });
}

let postImageReq = (url,text="jojo",type="image") => {
  return {
    options: sendMessageReq().options,
    body: {
      bot_id: BOTID,
      text: text,
      attachments: [{
        type: type,
        url: url
      }]
    }
  }
}

// post the image on the chat
function postImage(url){
  const req = https.request(postImageReq(url).options, (res) => {
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });
  
  req.on('error', (e) => {
    console.error(e);
    console.log();
  });
  
  req.end(JSON.stringify(postImageReq(url).body));
}

// send an image (accepts .png/.jpeg/.jpg)
function sendImage(imageFileName="capture.png"){
  getImageURL(imageFileName);
}

// // const limit = 256;
// // const color = [0];
// // const incrementBy = 1;
// // function incrementUp(binls,index=null){
// //   if(index===null){
// //     index = binls.length-1;
// //   }
// //   if(binls[index]<limit){
// //     binls[index]+=incrementBy;
// //     return binls;
// //   }
// //   // if last num is 1
// //   else{
// //     binls[index]=0;
// //     index-=1;
// //     if(index>=0){
// //       return incrementUp(binls,index);
// //     }
// //     else{
// //       return binls;
// //     }
// //   }
// // }

// // var palette = [];
// // let newcolor = color;
// // for(var i=0;i<(limit+1)**(color.length);i++){
// //   newcolor = incrementUp(newcolor);
// //   palette.push([...newcolor]);
// // }
// // console.log(palette);
// // // function* fibonacci() {
// // //     var fn1 = 0;
// // //     var fn2 = 1;
// // //     while (true) {  
// // //       var current = fn1;
// // //       fn1 = fn2;
// // //       fn2 = current + fn1;
// // //       var reset = yield current;
// // //       if (reset===1) {
// // //           fn1 = 0;
// // //           fn2 = 1;
// // //       }
// // //     }
// // //   }

// // //   var sequence = fibonacci();
// // //   console.log(sequence.next().value);     // 0
// // //   console.log(sequence.next().value);     // 1
// // //   console.log(sequence.next().value);     // 1
// // //   console.log(sequence.next().value);     // 2
// // //   console.log(sequence.next().value);     // 3
// // //   console.log(sequence.next().value);     // 5
// // //   console.log(sequence.next().value);     // 8
// // //   console.log(sequence.next("1").value); // 0
// // //   console.log(sequence.next().value);     // 1
// // //   console.log(sequence.next().value);     // 1
// // //   console.log(sequence.next().value);     // 2