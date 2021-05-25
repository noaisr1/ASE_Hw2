/**
 * 'express' handles http requests with a cain of Middleware functions.
 * Every request that comes goes thorough a function that can 
 * return an answer or continues to the next function in chain. 
 */
const express = require('express');
const path = require('path');
const port = 3000;

// initializing new web server:
const app = express();




app.get('/',(req,res)=>res.sendFile(path.resolve('home_page.html')));
app.listen(port);