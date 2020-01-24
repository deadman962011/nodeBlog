var CatigorySchema = require('../models/CatigorySchema')
var BlogSchema = require('../models/BlogSchema')





module.exports.CatigoryGet = function (req,res,next) {

    CatigorySchema.find({},function(err,result){
        res.render('Catigory',{Catigories:result});
        
        
    })





}


module.exports.CatigoryPost = function(req,res,next){

    if(req.body.AddSubmit=='Add'){
        newCatigory = new CatigorySchema();
        newCatigory.CatigoryName=req.body.CatigoryNameI;
        newCatigory.CatigoryColor=req.body.CatigoryColorI;
    
    
        newCatigory.save(function(err,result){
        res.redirect('./')  
        })
        console.log('Add post');
        
        }
    
    
    
        if(req.body.DelSubmit){
            
            CatigorySchema.findById(req.body.DelSubmit,function(err,result){
                result.remove();
                res.redirect('./')
            })
    
        
            
        }
 
 

}





module.exports.AddBlogGet = function(req,res,next){

    CatigorySchema.find({},function(err,result){
   
        res.render('AddBlog',{Catigories:result})
     
        })
     


}



module.exports.AddBlogPost = function(req,res,next){


    newBlog = new BlogSchema();
    newBlog.BlogThumbnail=req.body.BlogThumbnailI;
    newBlog.BlogTitle=req.body.BlogTitleI;
    newBlog.BlogBody=req.body.BlogBodyI;
    newBlog.BlogCatigoryId=req.body.BlogCatigoryI;
    newBlog.BlogAuthor=req.body.BlogAuthorI;
    newBlog.save();
    res.redirect('./')
   


}



module.exports.DelBlogGet= function (req,res,next) {

    BlogSchema.find({},function(err,result){
        res.render('DelBlog',{Blogs:result})
    })



}

module.exports.DelBlogPost=function(req,res,next){


    BlogSchema.findByIdAndDelete(req.body.DelSubmit,function(err){
        if(err){
            console.log(err);
        }
    
        
    })
    
    res.redirect('./')


}


module.exports.UpdateBlogGet= function(req,res,next){

    BlogSchema.find({},function(err,result){

        res.render('UpdateBlog',{Blogs:result})
    
     })


}


module.exports.UpdateBlogGet2 = function(req,res,next){

    var BlogId = req.params.BlogId;

    BlogSchema.findById(BlogId,function(err,result){
 
     CatigorySchema.find({},function(err,result2){
         res.render('UpdateBlog2',{Blog:result,Catigories:result2})
 
     })
    })
 
}


module.exports.UpdateBlogPost=function(req,res,next){


    
BlogSchema.updateOne({_id:req.params.BlogId},{$set:{     
          
    BlogTitle:req.body.BlogTitleI,
    BlogBody:req.body.BlogBodyI,
    BlogCatigoryId:req.body.BlogCatigoryI,
    BlogAuthor:req.body.BlogAuthorI,
    BlogThumbnail:req.body.BlogThumbnailI
    
}},function(err){
    if(err){
        console.log(err);
        
    }
});

res.redirect('./')





}