var express = require('express');
var router = express.Router();

router.get('/akhmetov_mansion', (req, res)=>{
    res.sendFile(__dirname + "/akhmetov_mansion/index.html")
})

router.get('/chelyabinsk_government_building', (req, res)=>{
    res.sendFile(__dirname + "/chelyabinsk_government_building/index.html")
})

router.get('/memorial_to_soldiers_of_law_and_order', (req, res)=>{
    res.sendFile(__dirname + "/memorial_to_soldiers_of_law_and_order/index.html")
})

router.get('/the_house_of_the_merchants_of_the_zlokazovs', (req, res)=>{
    res.sendFile(__dirname + "/the_house_of_the_merchants_of_the_zlokazovs/index.html")
})

router.get('/water_tower', (req, res)=>{
    res.sendFile(__dirname + "/water_tower/index.html")
})

module.exports = router