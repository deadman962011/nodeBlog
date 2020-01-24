var express = require('express');

var router = express.Router();

var AdminController = require('../controllers/AdminCtrlr')


router.get('/Catigory',AdminController.CatigoryGet)



router.post('/Catigory',AdminController.CatigoryPost)




router.get('/AddBlog',AdminController.AddBlogGet)



router.post('/AddBlog',AdminController.AddBlogPost)


router.get('/DelBlog',AdminController.DelBlogGet)



router.post('/DelBlog',AdminController.DelBlogPost)


router.get('/UpdateBlog',AdminController.UpdateBlogGet)


router.get('/UpdateBlog/:BlogId',AdminController.UpdateBlogGet2)


router.post('/UpdateBlog/:BlogId',AdminController.UpdateBlogPost)






module.exports = router;