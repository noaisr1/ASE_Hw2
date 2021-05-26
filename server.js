
const express = require('express');
const path = require('path');
const port = 3000;

// initializing new web server
const app = express(); 
// Getting the data
const data = require('./pokemon-data/pokemons.json')
app.use(express.json());
var pokemons_arr=[] // Array for pokemons objects

app.get('/pokemons',(req,res)=>{
    res.sendFile(path.resolve('pages/home_page.html'));
});
app.post('/pokemons', (req,res)=>{
    for( p in data){
        console.log(p)
    }

    
});

app.get('/',(req,res)=>res.sendFile(path.resolve('pages/home_page.html')));
app.listen(port);