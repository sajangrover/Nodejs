const mmongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operation');
const url = 'mongodb://127.0.0.1:27017/';
const dbname = 'conFusion';

mmongoClient.connect(url).then((client) => {

    console.log('connected to db server');
    const db = client.db(dbname);
    
    dboper.insertDocument(db,{'name' : 'sajan grover', 'description':'tes1'},'dishes')
    .then(result =>{
        console.log('insert Document \n ' , result.ops);

        return dboper.findDocument(db,'dishes') })
    .then(docs => {
        console.log('found document \n ' ,docs);

        return dboper.updateDocument(db,{'name' : 'sajan grover'}, {'description':' updated test'}, 'dishes')})
    .then(res => {
        console.log('updated document \n ' , res.result)

        return dboper.findDocument(db,'dishes')})
    .then(docs => {
        console.log('Found updated document \n ' , docs);

        return db.dropCollection('dishes')})
    .then(result => {
        console.log('collection dropped : ' + result);
        return client.close();
    })
    .catch(err => console.log(err))

})
.catch(err => console.log(err));
