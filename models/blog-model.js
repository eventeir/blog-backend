const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const blogSchema = new mongoose.Schema({
  blog_id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  meta_description: {
    type: String,
  },
  keywords: {
    type: [String],  // Store as an array of keywords
  },
  status: {
    type: String,
    enum: ['draft', 'publish', 'archive'],
    default: 'draft',
  },
  is_published: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
