
const express = require('express');
const path = require('path');
const port = 3000;

// initializing new web server
const app = express(); 
// Getting the data

app.use(express.json());
const data = require('./pokemon-data/pokemons.json')
var pokemons_arr=[] // Array for pokemons objects

app.get('/pokemons',(req,res)=>{
    res.sendFile(path.resolve('pages/home_page.html'));
    console.log(pokemons_arr);
});
app.post('/pokemons', (req,res)=>{
    console.log("wow");
    for(i=0; i<data.length; i++){
        pokemons_arr.push({id: data[i].season, 
            name: data[i].name, 
            type:data[i].type,
            base: data[i].base});
    }
   
    res.send(epsArr);  
});

app.get('/',(req,res)=>res.sendFile(path.resolve('pages/home_page.html')));
app.listen(port);