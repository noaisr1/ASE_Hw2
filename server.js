

const { pbkdf2 } = require('crypto');
const express = require('express');
const path = require('path');
const port = 3000;
// Initialize new web server
const app = express();
// Getting data 
const data = require('./pokemons.json')

// Setting css styles and images as static
app.use(express.static(path.join(__dirname,'public')));
var id_str = "";
// Arranging data:
for(i=0;i<data.length;i++){
    id_str=`${data[i].id}`.padStart(3,'0'); // Making all the ids be with 3 digits and fill the empty parts with '0'
    data[i].img=`/images/${id_str}.png`; // Making default template for all images
    data[i].clicks = 0; // Adding counter for clicks
}

// Returns html pages to the right paths
app.get('/pokemons/:id',(req,res)=>{
    var exact_pok=data.find((pok)=>pok.id==(req.params.id));
    // Adding 1 to clicks counter:
    exact_pok.clicks++;
    res.sendFile(path.resolve('pages/pokemon_profile.html'));
});
app.get('/api/pokemons',(req,res)=>{
    data.sort((p1,p2)=>{
        return p1.id-p2.id;
    });
    res.send(data);
});
app.get('/pokemons',(req,res)=>{
    res.sendFile(path.resolve('pages/all_pokemons.html'));
});
app.get('/api/pokemons/:id',(req,res)=>{
    // Finding the exact pokemon for the given id in the path
    var exact_pok=data.find((pok)=>pok.id==(req.params.id));
    res.send(exact_pok);
});
app.get('/api/top3',(req,res)=>{
    data.sort((p1,p2)=>{
        return p2.clicks-p1.clicks;
    });
    res.send(data.slice(0,3));
});
app.get('/',(req,res)=>res.sendFile(path.resolve('pages/home_page.html')));
app.listen(port);