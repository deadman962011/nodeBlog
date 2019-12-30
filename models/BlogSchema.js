var mongoose =require('mongoose');



var Schema=mongoose.Schema;

var BlogSchema = new Schema({
BlogTitle:{type:String,required:true},
BlogBody:{type:String,required:true},
BlogAuthor:{type:String,required:true},
BlogThumbnail:{type:String,required:true},
BlogCatigoryId:{type:String,required:true}
});



module.exports=mongoose.model('Blog',BlogSchema)