// Create web server using Express
const express = require('express');
const router = express.Router();

// Import data
const data = require('../data/data.json');

// Import data from JSON file
const { comments } = data;

// Set up route for comments page
router.get('/comments', (req, res) => {
    // Render comments page with data from JSON file
    res.render('comments', {
        comments,
        pageTitle: 'Comments',
        pageID: 'comments'
    });
});

// Set up route for comment page
router.get('/comments/:id', (req, res) => {
    // Set up variables for comment ID and comment data
    const comment = comments[req.params.id];
    const name = comment.name;
    const commentText = comment.comment;
    const commentID = comment.id;

    // Render comment page with data from JSON file
    res.render('comment', {
        name,
        commentText,
        commentID,
        pageTitle: 'Comment',
        pageID: 'comment'
    });
});

// Export router
module.exports = router;