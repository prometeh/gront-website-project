 const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifyToken');

router.get('/',verify, (req,res)=>{

    res.json({post:{
                title:'my first post',
            }
    });

    
});

module.exports = router;
 