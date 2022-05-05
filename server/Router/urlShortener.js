const express = require('express');
const router = express.Router();
const config = require('../data');
router.use(express.json()); 
const ssid = require('shortid');


var db = config['module'];
var urlDetails = {
    original_url : "",
    shorten_url : "",
    code : ""
}

const base = "http://localhost:3001/";
router.get('/', (req,res) => {
    res.send(db);
})

router.post('/api/url/', (req,res) => {


    const data = req.body;
    const original_url = data['uri'];
    const code = ssid.generate();
    const shorten_url = base + code;
    urlDetails['original_url'] = original_url;
    urlDetails['shorten_url'] = shorten_url;
    urlDetails['code'] = code;
    db.push(urlDetails);
    urlDetails =[];
    res.send(shorten_url);
})


module.exports = router;