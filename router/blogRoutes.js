//The use of a router is essential for organizing your code into manageable chunks. 
//Each route corresponds to a different action that can be performed on the blog posts, 
//following the REST architectural style.
const express = require('express');
const blogController = require('../controllers/blogController');


const router = express.Router(); 

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);



module.exports = router ;
