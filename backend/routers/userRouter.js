require('dotenv').config();
const express = require('express');
const Model = require('../models/userModel');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers['x-auth-token'];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

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

router.post('/update', verifyToken, (req, res) => {
  Model.findByIdAndUpdate(req.user._id, req.body, { new: true })
    .then((result) => {
        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

// Get user details
router.get('/getdetails', verifyToken, (req, res) => {
    Model.findById(req.user._id)
        .select('-password') // Exclude password from the response
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'User not found' });
            }
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

//authenticate user
router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
    .then((result) => {
      if(result){
        const {_id, name, email, role} = result;
        const payload = {_id, name, email, role};
  
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: '1d' },
          (err, token) => {
            if(err){
              console.log(err);
              res.status(500).json(err);
            } else {
              res.status(200).json({ token, role });
            }
          }
        )
      }else{
        res.status(401).json({ message: 'Invalid credentials'})
      }
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;