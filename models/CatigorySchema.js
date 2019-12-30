var mongoose =require('mongoose');


var Schema = mongoose.Schema ;



var CatigorySchema = new Schema({

CatigoryName:{type:String,required:true},
CatigoryColor:{type:String,required:true},
CatigoryBlogNum:{type:String,default:0}


});


module.exports = mongoose.model('Catigory',CatigorySchema)


