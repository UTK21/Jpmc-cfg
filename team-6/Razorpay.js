require("dotenv").config();
const generate = require('nanoid-generate');
const express = require("express");
const Razorpay = require("razorpay");
const Startup = require('./models/Startup')


const router = express.Router();

router.post("/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        }); 
        const amount = req.body.amount
        const options = {
            amount: amount*100, 
            currency: "INR",
            receipt: generate.english(10),
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});