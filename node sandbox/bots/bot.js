/* eslint-disable no-unused-vars */
require('dotenv').config();
const https = require('https');
const fs = require('fs');

const TOKEN = process.env.TOKEN;
const GROUPID = process.env.GROUPID;
const BOTID = process.env.BOTID;
const port = 443;
const hostname = "api.groupme.com";
let path = '/v3/bots/post';
path = 'https://image.groupme.com/pictures';

let getGroupID = () => {
  return {
    options: {
      hostname: hostname,
      port: port,
      path: '/v3/groups?token=' + TOKEN,
      method: 'GET'
    }
  }
}

let makeBot = (name = "Olive") => {
  return {
    options: {
      hostname: hostname,
      port: port,
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

let sendMessage = (text = "PIZZA") => {
  return {
    options: {
      hostname: hostname,
      port: port,
      path: '/v3/bots/post',
      method: 'POST'
    },
    body: {
      text: text,
      bot_id: BOTID
    }
  }
}

let sendLocation = (
  loc = {type: "Apple Farm",lng: 40,lat: 70,name: "The Farm"},
  text = "tally ho"
  ) => {
  return {
    options: sendMessage().options,
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

let getImgURL = () => {
    return {
    options: {
      hostname: 'image.groupme.com',
      port: port,
      path: '/pictures',
      method: 'POST',
      headers: {
        'X-Access-Token': TOKEN,
        'Content-Type': 'image/jpeg'
      }
    }
  };
}

let sendImage = (imageURL) => {
  return {
    options: sendMessage().options,
    body: {
      bot_id: BOTID,
      text: "jojo",
      attachments: [{
        type: "image",
        // "url": "https://i.groupme.com/somethingsomething.large"
        url: url
      }]
    }
  }
}

function uploadImage(req,imgName='capture.jpeg'){
  fs.readFile(imgName, (err, data) => {
    if (err) throw err;
    req.end(data);
  });
}

const req = https.request(getImgURL().options, (res) => {
  res.on('data', (d) => {
    process.stdout.write(d);
    let url = JSON.parse(d.toString()).payload.picture_url;
    // console.log(url);
    process.stdout.write(url);
  });
});

req.on('error', (e) => {
  console.error(e);
  console.log();
});

uploadImage(req);

// fs.readFile('capture.jpeg', (e, d) => {
//   if(e) throw e;
//   req.end(d);
// });

// req.end(JSON.stringify(sendImage.body));


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