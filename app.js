const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;


app.listen(3000, () => {
    console.log('Servidor corriendo localhost:3000')
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

app.get('/vender', (req,res) =>{
   
    res.sendFile(path.join(__dirname, '/views/vender.html'));
})

app.listen(PORT, () => {
 console.log('Servidor corriendo ' + PORT)
})


app.use(express.static('public'));