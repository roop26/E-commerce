const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/orderModel');
require('dotenv').config();
const jwt = require('jsonwebtoken');

// Initialize Razorpay
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers['x-auth-token'];
    // console.log('token:', token);
    
    if (!token) return res.status(401).json({ message: 'No token provided' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);
        
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        
        res.status(401).json({ message: 'Invalid token', error: error.message });
    }
};

// Create Razorpay order
router.post('/create-order', verifyToken, async (req, res) => {
    try {
        const { amount } = req.body;
        const options = {
            amount: amount * 100, // Razorpay expects amount in paise
            currency: "INR",
            receipt: "order_" + Date.now(),
        };

        const order = await razorpay.orders.create(options);
        res.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            keyId: process.env.RAZORPAY_KEY_ID
        });
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
});

// Verify payment
router.post('/verify-payment', verifyToken, async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            orderId
        } = req.body;

        // Verify signature
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;
        console.log(expectedSignature, razorpay_signature);
        
        if (isAuthentic) {
            // Update order status
            await Order.findByIdAndUpdate(
                orderId,
                {
                    status: 'success',
                    razorpay_order_id,
                    razorpay_payment_id,
                    razorpay_signature
                },
                { new: true }
            );

            res.json({
                success: true,
                message: 'Payment verified successfully'
            });
        } else {
            await Order.findByIdAndUpdate(
                orderId,
                { status: 'failed' },
                { new: true }
            );
            
            res.status(400).json({
                success: false,
                message: 'Invalid payment signature'
            });
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).json({ message: 'Error verifying payment', error: error.message });
    }
});

module.exports = router;
