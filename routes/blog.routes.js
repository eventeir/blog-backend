const express = require('express');
const { createBlog, updateBlog, getSingleBlog, getAllBlogs } = require('../controller/blog.controller');

const router = express.Router();

router.post('/', createBlog);         // Create a new blog
router.put('/:id', updateBlog);       // Update an existing blog
router.get('/:id', getSingleBlog);    // Get single blog by ID
router.get('/', getAllBlogs);         // Get all blogs

module.exports = router;
