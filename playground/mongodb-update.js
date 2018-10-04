//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5bb67a79438237a8c6cf41ec")
    // }, {
    //     // these are update operators. these need to be used when updating a value i.e $inc increments age
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5bb204c46ad4bf34348ddb69")
    }, {
        // these are update operators. these need to be used when updating a value i.e $inc increments age
        $set: {
            name: 'Dan'
        },
        $inc:{ 
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    

    //client.close();
});