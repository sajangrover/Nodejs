const mmongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operation');
const url = 'mongodb://127.0.0.1:27017/';
const dbname = 'conFusion';

mmongoClient.connect(url, (err,client) => {
    assert.equal(err,null);

    console.log('connected to db server');
    const db = client.db(dbname);
    
    dboper.insertDocument(db,{'name' : 'sajan grover', 'description':'tes1'},'dishes',(result) =>{
        console.log('insert Document \n ' , result.ops);

        dboper.findDocument(db,'dishes',(docs) => {
            console.log('found document \n ' ,docs);

            dboper.updateDocument(db,{'name' : 'sajan grover'}, {'description':' updated test'}, 'dishes', (res) => {
                console.log('updated document \n ' , res.result)

                dboper.findDocument(db,'dishes', (docs) => {
                    console.log('Found updated document \n ' , docs);

                    db.dropCollection('dishes', (result) => {
                        console.log('collection dropped : ' + result);
                        client.close();
                    })
                })
            })
        })
    })

});
