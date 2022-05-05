const express = require('express');
const router = express.Router();
const config = require('../data');
router.use(express.json());



const db = config['module'];


router.get('/:code', (req,res) => {

    const code = req.params['code'];
    var original_url = '/'
    
    for(var urls =0 ;urls<db.length; urls++){

        if(db[urls]['code'] === code){

            original_url = db[urls]['original_url'];
           
        }
    }
    return res.redirect(original_url);
})

module.exports=router;
