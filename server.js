// dependencies
const express = require('express')
const methodOverride = require('method-override')
// const Bread = require('../breads')
const mongoose = require('mongoose')
 
// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )


// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// app.set('views', __dirname + '/views')



// routes
app.get('/', (req, res) => {
    res.render('home')
})

// breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

  
// Listen

const server = app.listen(PORT, () => {
    console.log('listening on port', PORT);
})


module.exports = app;
// server.close();
