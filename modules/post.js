const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/assignment');

const Schema = mongoose.Schema;

const postdetailsschema =new Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    image:{ type:String,required:true},
    user : {type: Schema.Types.ObjectId, ref: "User"}
})

const postdetails = mongoose.model("Posts",postdetailsschema);

module.exports=postdetails;
