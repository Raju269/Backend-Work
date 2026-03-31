// const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';
// or as en es modue:
// import { MongoClient } from 'mongodb';

// connection URL 

const url = "mongodb+srv://Piyush:<db_password>piyush0.pxeqbpa.mongodb.net/?appName=Piyush0";
const client = new MongoClient(url);

// Database Name 
const dbName = 'CoderArmy';

async function main() {
    // Use connect method to connected to the server 
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('users');
    // the following code examples can be pasted here...
    return "done";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());