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
 
    insertDocuments(db, function() {
        client.close();
    });

});




//Insert Documentation
const insertDocuments = function(db, callback){
    //Get the doc
    const collection = db.collection('fruits');
    //Insert some doc
    collection.insertMany([
        {
            name: "Apple",
            score: 8,
            review: "Great fruit"
        }, 
        {
            name: "Orange",
            score:6,
            review: "Kinda sour"
        }, 
        {
            name: "Banana",
            score: 9,
            review: "Great!"
        }
    ], function(err, result) {
        
        console.log("Inserting 3 documents into the collection");
        callback(result);
    });
}
