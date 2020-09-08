const fs = require('fs');

// Reading a file
// fs.readFile('callApi.js', 'utf8', (err,data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// appending content to a file in last, if file is not exixt it create a file
// fs.appendFile('callApi.js', 'hello i am going to append this content', (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('saved');
//     }
// })

// write into the file. if file is not exixt it create a file
// fs.writeFile('callA.js', 'hello world', (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('written');
//     }
// })

// delete a file
// fs.unlink('callAi.js', (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('delete file');
//     }
// })

// write data from one to another file
// let readStream = fs.createReadStream('callApi.js' ,'utf8');
// let writeStream = fs.createWriteStream('callA.js');

// readStream.on('data' , (chunk ) =>{
//     console.log(chunk);
//     writeStream.write(chunk);
// })

// let readStream = fs.createReadStream('callApi.js' ,'utf8');
// let writeStream = fs.createWriteStream('callAp.js');

// readStream.pipe(writeStream)



