const express = require('express');
const Model = require('../models/orderModel');
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

// Generate Order ID
router.get('/generate-order-id', verifyToken, (req, res) => {
    const orderId = 'ORD' + Date.now();
    res.json({ orderId });
});

router.post('/add', verifyToken, (req, res) => {
    const orderData = {
        username: req.user.name,
        address: req.body.shippingAddress,
        totalAmount: req.body.items.reduce((total, item) => total + (item.price * item.quantity), 0),
        orderItems: req.body.items.map(item => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price
        })),
        status: req.body.status,
        paymentMethod: req.body.paymentMethod,
        userId: req.user._id
    };

    new Model(orderData).save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// getall 
router.get('/getall', verifyToken, (req,res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;