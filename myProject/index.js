import express from "express";
import mongoose from "mongoose";
// import dotenv from "dotenv";
// const {dns}
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://rajuk631149:mern1234@mern.k3dfo27.mongodb.net/admin?appName=mern&retryWrites=true&w=majority';
const client =  new MongoClient(url);

// Database Name
const dbName = 'CoderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());