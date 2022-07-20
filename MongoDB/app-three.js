const { MongoClient } = require("mongodb");
const assert = require("assert");
// Connection URI
const uri = "mongodb://127.0.0.1:27017";
const dbName = 'fruitsDB'
  // Create a new MongoClient
const client = new MongoClient(uri);

client.connect(function(err) {
    
    assert.equal(null,err);

    client.connect();

    const db = client.db(dbName);
    console.log("Connected successfully to server");


    findDocumnets(db, function(){
        client.close();
    });
});



//Find All Documents
const findDocumnets = function(db, callback) {
    const collection = db.collection('fruits');
    collection.find({}).toArray(function(err, fruits) {
      if (err) throw err;
      console.log("Found the following records");
      console.log(fruits);
      callback(fruits);
    });
};