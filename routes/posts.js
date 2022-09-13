const express = require("express");
const User = require("../modules/user");
const Post = require("../modules/post");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const router = express.Router();


router.get("/", async (req, res) => {
    const data = await Post.find();
    res.json ({
        status: "post created",
       data
    })

})
////////
router.post("/" , async (req, res) => {
   
    try {
       
        const users = await Post.create({
            title : req.body.title,
            body : req.body.body,
            image : req.body.image,
            user : req.user});
        res.json({
            status: "Post created",
            users
        })

    }catch(e) {
        res.status(500).json({
            status: "Failed ",
            message: e.message
        })
    }

});
 
router.put("/:id", async (req, res) => {
    
    try {
        console.log(req.query);
        const users = await Post.updateOne({_id: req.params.id},req.body);
        res.json({
            status: "Success",
            
        })

    }catch(e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

});

router.delete("/:id", async (req, res) => {
    
    try {
        const users = await Post.deleteOne({_id: req.params.id});
        res.json({
            status: "Successfully deleted",
            users
        })

    }catch(e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

});


module.exports = router;

////// xdcfvgbhnjmk
///// zxcvbn