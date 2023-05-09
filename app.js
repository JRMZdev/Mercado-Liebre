const express = require('express');
const app = express();
const path = require('path');

app.listen(8000, () => {
    console.log('Servidor corriendo localhost:8000')
})

app.get('/', (req,res) =>{
   
    res.sendFile(path.join(__dirname, '/views/home.html'));
})

app.get('/login', (req,res) =>{
   
    res.sendFile(path.join(__dirname, '/views/login.html'));
})

app.get('/register', (req,res) =>{
   
    res.sendFile(path.join(__dirname, '/views/register.html'));
})

app.get('/404', (req,res) =>{
   
    res.send('Error página no encontrada');
})

app.use(express.static('public'));