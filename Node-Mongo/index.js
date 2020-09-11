const mmongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017/';
const dbname = 'conFusion';

mmongoClient.connect(url, (err,client) => {
    assert.equal(err,null);

    console.log('connected to db server');
    const db = client.db(dbname);
    const collection = db.collection('dishes')

    collection.insertOne({'name' : 'sajan grover', 'description':'tes1'},(err,res) =>{
        assert.equal(err,null);
        console.log('After Insert : ');
        console.log(res.ops);

        collection.find().toArray((err,docs) =>{
            assert.equal(err,null);

            console.log('found : ');
            console.log(docs);

            db.dropCollection("dishes" , (err,result) => {
                assert.equal(err,null);

                client.close();
            });
        });
    });
});
