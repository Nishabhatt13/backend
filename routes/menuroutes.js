const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/Menuitem');


router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('item sucessfully added');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'internal server error' })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("fetch successfully");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'internal server error' })

    }
})

module.exports = router;