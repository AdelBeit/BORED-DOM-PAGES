/* eslint-disable no-unused-vars */
const https = require('https');
const fs = require('fs');
const env = require('env');

const token = env.creds.token;
const groupid = env.creds.groupid;
const botid = env.creds.botid;
console.log(process.env.creds.token);
// const port = 443;
// const hostname = "api.groupme.com";
// let path = '/v3/bots/post';
// path = 'https://image.groupme.com/pictures';

// let getGroupID = {
//   options: {
//     hostname: hostname,
//     port: port,
//     path: '/v3/groups?token='+token,
//     method: 'GET'  
//   }
// }

// let makeBot = {
//   options: {
//     hostname: hostname,
//     port: port,
//     path: '/v3/bots?token='+token,
//     method: 'POST',
//     headers: {
//       'X-Access-Token': token,
//       'Content-Type': 'text/json'
//     }
//   },
//   body: {
//     bot:{
//       name: "Olive",
//       group_id: groupid
//     }
//   }
// }

// let sendMessage = {
//   options: {
//     hostname: hostname,
//     port: port,
//     path: '/v3/bots/post',
//     method: 'POST'
//   },
//   body: {
//     bot_id: botid,
//     text: "pizza"
//   }
// }

// let sendLocation = {
//   options: sendMessage.options,
//   body: {
//     bot_id: botid,
//     text: "nice weather we're having",
//     attachments: [
//       {
//         type: "location",
//         lng: 40,
//         lat: 70,
//         name: "Groupme HQ"
//       }
//     ]
//   }
// }

// let sendImage = {
//   options: sendMessage.options,
//   body: {
//     "bot_id"  : botid,
//     "text"    : "jojo",
//     "attachments" : [
//         {
//             "type"  : "image",
//             "url"   : "https://i.groupme.com/somethingsomething.large"
//           }
//         ]
//   }
// }

// let uploadImage = {
//   headers: {
//     'X-Access-Token': token,
//     // 'Content-Type': 'image/jpeg'
//     'Content-Type': ''
//   },
//   options: {
//     url: 'https://image.groupme.com/pictures',
//     method: 'POST',
//     headers: uploadImage.headers
//   },
//   body: {
//     file: fs.readFile(imageName, (err, data) => {
//       if(err) throw err;  
//       req.end(data);
//     })
//   }
// };

// const req = https.request(sendImage.options, (res) => {
//   res.on('data', (d) => {
//     process.stdout.write(d);
//   //   // let url = JSON.parse(d.toString()).payload.picture_url;
//   });
// });


// req.on('error', (e) => {
//   console.error(e);
//   console.log();
// });
// fs.readFile('capture.jpeg', (e, d) => {
//   if(e) throw e;  
//   // req.end(d);
// });

// sendImage.imageName = 'capture.jpg';
// req.end(JSON.stringify(sendImage.body));


// // const req = https.post(options, (res) => {
// //   console.log('statusCode:', res.statusCode);
// //   console.log('headers:', res.headers);
// //   res.on('data', (d) => {
// //     process.stdout.write(d);
// //   });
// // });


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