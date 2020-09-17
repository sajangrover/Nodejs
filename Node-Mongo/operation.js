const assert = require("assert");

exports.insertDocument = (db,document,collection,callback) => {
    const col = db.collection(collection);
    col.insert(document, (err,res) => {
        assert.equal(err,null);
        console.log("inserted document : " + res.result.n + collection);
        callback(res);
    });
}

exports.findDocument = (db,collection,callback) => {
    const col = db.collection(collection);
    col.find().toArray( (err,docs) => {
        assert.equal(err,null);
        callback(docs);
    });
}

exports.removeDocument = (db,document, collection,callback) => {
    const col = db.collection(collection);
    col.deleteOne(document, (err,res) => {
        assert.equal(err,null);
        console.log("deleted document : " , document);
        callback(res);
    });
}

exports.updateDocument = (db,document,update, collection,callback) => {
    const col = db.collection(collection);
    col.updateOne(document,{$set : update}, (err,res) => {
        assert.equal(err,null);
        console.log("update document with: " , update);
        callback(res);
    });
}