// dependencies
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Breads
const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

// DEPENDENCIES
const methodOverride = require('method-override')

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))



// routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})



// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  

// Listen

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})