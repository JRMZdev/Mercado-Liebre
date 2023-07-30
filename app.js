//Require dependencies

const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const requestlogger = require('morgan');

//------ Login Mw -------//
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionLogin = require('./middlewares/userLoginMw');

//Use HTTP methods: PATCH, DELETE Y PUT//

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride ("_method"))

//------- Loggin Control -----//
app.use(requestlogger('dev')); 
app.use(session ({
  secret: "MLi-e-ebre",
  resave: false,
  saveUninitialized: false
}))
app.use(cookieParser());
app.use(sessionLogin); 

//Require Routes

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');

//Set static paths
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//Set views engine
app.set('view engine', 'ejs');

//Set the use of predefined routes

app.use(mainRoutes);
app.use('/user',userRoutes);
app.use('/product',productsRoutes);

//Normalize PORT
const port = process.env.PORT || '3000';

app.use((req, res)=>{
  res.render("mainViews/error")
});

app.listen(port, () => { 
  console.log(`Server running in ${port} port`); 
});

module.exports = app;