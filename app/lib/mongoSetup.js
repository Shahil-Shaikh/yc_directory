import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
//here the client is nothing but an object 
/*
new MongoClient(uri) creates a MongoClient instance — a plain JS object holding your connection config, connection pool logic, etc. Creating it does not open a network connection. It's just an in-memory object at that point. export default client exports a reference to that same object — every file that imports it gets the same instance, not a copy.
*/
try {
  console.log(":", typeof client)
  // console.log(":", typeof client, client) => this shows the client object , nothing else
  await client.connect();
  console.log("Successfully connected!");
}
catch (error) {
  throw new Error("Not Connected to Data Base.");

}
/*
Before doing client.connect(), the client is just a plain JS object. After calling connect(), it has an active connection pool and can talk to the database. The connect() call is asynchronous, so you need to await it or handle the returned promise.
And so the client object is exported and can be used in other files to access the database. The connection is established once and reused across requests, which is efficient and avoids creating too many connections.
*/
export default client;


