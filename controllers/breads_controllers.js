const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')


// INDEX

// INDEX
breads.get('/', (req, res) => {
    res.render('index',
        {
            breads: Bread
        }
    )
  // res.send(Bread)
})


// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})


// DELETE
breads.delete('/:indexArray', (req, res) => {
    if (Bread[req.params.indexArray]){
      Bread.splice(req.params.indexArray, 1)
    res.status(303).redirect('/breads')
    }  else {
      res.send('Bread DNE')
    }
    
  })
  

module.exports = breads