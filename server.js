

const { pbkdf2 } = require('crypto');
const express = require('express');
const path = require('path');
const port = 3000;
// Initialize new web server
const app = express();
// Getting data 
const data = require('./pokemons.json')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Setting css styles and images as static
app.use(express.static(path.join(__dirname,'public')))
var pokArr=[];
var id_str = "";
// Arranging data:
for(i=0;i<data.length;i++){
    id_str=`${data[i].id}`.padStart(3,'0'); // Making all the ids be with 3 digits and fill the empty parts with '0'
    data[i].img=`/images/${id_str}.png`; // Making default template for all images
    data[i].clicks = 0; // Adding counter for clicks
}

// Sorting the data and getting it from server
app.get('/api/get_pokemons',(req,res)=>{
    data.sort((p1,p2)=>{
        return p1.id-p2.id;
    });
    res.send(data);
});
// Returns html page with the data
app.get('/pokemons',(req,res)=>{
    res.sendFile(path.resolve('pages/all_pokemons.html'));
});
app.get('/',(req,res)=>res.sendFile(path.resolve('pages/home_page.html')));
app.listen(port);