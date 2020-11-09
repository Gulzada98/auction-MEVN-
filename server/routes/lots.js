const express = require('express')
const router = express.Router()

const Lot = require('../models/lots')

//+http://localhost:3000/lots
router.get('/', async(req, res) => {
  //res.send('List')
  const lotList = await Lot.find().exec()
  res.json(lotList)
})

//+http://localhost:3000/lots/5fa64acc49f7b74e547242a2
router.get('/:id', async(req, res) => {
 // res.send('One')
 const lot = await Lot.findById(req.params.id).exec()
  res.json(lot)
})

//+http://localhost:3000/lots
router.post('/', async(req, res) => {
  //res.send('Create')
  const newLot = new Lot(req.body)
  const lot = await newLot.save()
  res.json(lot)

  //res.send(newUser);  
})

//+
router.put('/:id', async(req, res) => {

  //res.send('Update')
  var lot = await Lot.findById(req.params.id).exec();
  lot.set(req.body);
  var updatedLot = await lot.save();
  res.json(updatedLot);
})

//+http://localhost:3000/lots/5fa64b9249f7b74e547242a3
router.delete('/:id', async(req, res) => {
  //res.send('Delete');
  const lot = await Lot.findById(req.params.id).exec();
  res.json(lot);
  lot.delete(); 
  //lot.delete().save();  
})

module.exports = router