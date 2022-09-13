const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/assignment');

const Schema = mongoose.Schema;

const userdetailsschema =new Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true}
});

const userdetails = mongoose.model("Users",userdetailsschema);

module.exports=userdetails;

