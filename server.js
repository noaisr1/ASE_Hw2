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

// setup routs with methods:
app.get("/", (req, res) => {
    res.sendFile(path.resolve("index.html"));
});
app.get("/message", (req, res) =>{
    res.sendFile(path.resolve("message.html"));
});
app.post('/message', (req,res)=>{
    /** TODO */
    res.redirect("/");
})

/**
 * To create our middleware we can use the 'use' method of the 
 * object we created when we called 'express()' (in my case the app object)
 * 'use' agrument is a function that its parameters are - object of the http request (req),
 * object od http response (res) and a function that calles the next middleware.
 * 
 * It is possible to pass 'use()' a string that represents path
 * of request to handle requests that start in a spesific path
 *
 */

/**
 * A middleware function that doesn't return an answer or calls the 
 * next request in the cain will cause the request get stuck at the 
 * server untill the connection is closed
 */
// Start adding middlewates here:
app.use('/users',(req, res, next) => {
    console.log("first");
    next(); // Allows the req to continue to the next middleware
});
/**
 * The object res has a 'send' method for sending response.
 * Type of response is decided by the function arg.
 * The Header of the response changes due to what sent to the function.
 */
app.use((req, res, next)=>{
    console.log("second");
    res.send("<h1>Easy<h1>");
});

// Listen for requests:
app.listen(port,() => console.log(`server running on http://localhost&{port}`));