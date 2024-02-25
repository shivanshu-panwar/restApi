var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StudentCollection = new Schema ({
    name:String,
    rollno:Number,
    class:String
});

var smodel=mongoose.model('studentinfo',StudentCollection);
module.exports=smodel;