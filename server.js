/*import http = require('http');
var port = process.env.port || 1337
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);*/

/*You’re going to use the MongoClient to interact with your database.
 * Note that you also initialize your app as an instance of Express, 
 * your framework.

The last thing you need to do to get your server up and running 
is to tell your app to start listening for HTTP requests.*/

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;
// add the route for post.
app.use(bodyParser.urlencoded({extended:true}));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
                        
    // Make sure you add the database name and not the collection name
    db = database.db("note-api")
    require('./app/routes')(app, db);
    app.listen(port, () => {
      console.log('We are live on ' + port);
    });               
  })


