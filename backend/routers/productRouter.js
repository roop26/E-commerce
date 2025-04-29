const express = require('express');
const Model = require('../models/productModel');
const router = express.Router();

// Search products
router.get('/search', (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ message: 'Search query is required' });
    }

    const searchRegex = new RegExp(query, 'i');
    
    Model.find({
        $or: [
            { brandName: searchRegex },
            { productName: searchRegex },
            { category: searchRegex },
            { 'categories.main': searchRegex },
            { 'categories.sub': searchRegex }
        ]
    })
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add product
router.post('/add', (req, res) => {
    console.log(req.body);
    
   new Model(req.body).save()
   .then((result) => {
    res.status(200).json(result);
   })
   .catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});

// getall 
router.get('/getall', (req,res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// getbyid
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
     });
});


module.exports = router;