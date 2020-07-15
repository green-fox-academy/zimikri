'use strict';

const Post = require('../models/Post');
const User = require('../models/User');
const loggedInUser = {};

// const user = new User();

const postController = function(app) {
    app.get('/posts', (req, res) => {
        
        if (req.query.id) return res.redirect(`/posts/${req.query.id}`);

        Post.list(req.headers.username, (err, posts) => {
            if (err) 
                return postController.sendError(res, 500, 'Error during DB query');
            

            res.json({
                posts: posts,
            });
        });
    });

    app.get('/posts/:id', (req, res) => {
        Post.getItem(req.params.id, req.headers.username, (err, post) => {
            if (err) 
                return postController.sendError(res, 500, 'Error during DB query');
            
            res.json(post || {});
        });
    });

    app.post('/posts', (req, res) => {
        postController.authUser(res, req.headers.username, (err, user) => {
            if (err) return;

            Post.add(req.body, user.id, (err, newId) => {
                if (err) 
                    return postController.sendError(res, 500, 'Error during DB query');
            
                res.redirect(`/posts/${newId}`);
                return;
            });
        });
    });

    app.put('/posts/:id/:vote', (req, res) => {
        let vote = (req.params.vote == 'upvote') ? 1 : 0;
        vote = (req.params.vote == 'downvote') ? -1 : vote;
        if (vote == 0)
            return postController.sendError(res, 404, 'No such resurce');

        postController.authUser(res, req.headers.username, (err, user) => {
            if (err) return;
 
            Post.getItem(req.params.id, req.headers.username, (err, post) => {
                if (err) 
                    return postController.sendError(res, 500, 'Error during DB query');
                
                if (!post)
                    return postController.sendError(res, 404, `Can't find the post you want to ${req.params.vote}`);
                
                post.vote += vote;
                if (post.vote < -1 || post.vote > 1)
                    return postController.sendError(res, 400, `You can't ${req.params.vote} again`);

                Post.vote(post.id, user.id, vote, (err, result) => {
                    if (err) 
                        return postController.sendError(res, 500, err.clientMessage);
                    
                    post.score += vote;
                    res.json(post);
                });
            });
        });
    });

    app.put('/posts/:id', (req, res) => {
        postController.authUser(res, req.headers.username, (err, user) => {
            if (err) return;
            
            Post.getItem(req.params.id, req.headers.username, (err, post) => {
                if (err) 
                    return postController.sendError(res, 500, err.clientMessage);
                if (!post)
                    return postController.sendError(res, 404, `Can't be found the post you want to update`);
                if (post.owner !== req.headers.username)
                    return postController.sendError(res, 403, `You can only update your own posts`);

                Post.update(req.params.id, req.body.title, req.body.url, (err, timestamp) => {
                    if (err) 
                        return postController.sendError(res, 500, err.clientMessage);
                    
                    post.title = req.body.title;
                    post.url = req.body.url;
                    res.json(post);
                });
            });
        });
     });

    app.delete('/posts/:id', (req, res) => {
        postController.authUser(res, req.headers.username, (err, user) => {
            if (err) return;
            Post.getItem(req.params.id, req.headers.username, (err, post) => {
                if (err) 
                    return postController.sendError(res, 500, err.clientMessage);
                if (!post)
                    return postController.sendError(res, 404, `Can't be found the post you want to delete`);
                if (post.owner !== req.headers.username)
                    return postController.sendError(res, 403, `You can only delete your own posts`);
            
                Post.delete(req.params.id, (err, result) => {
                    if (err) 
                        return postController.sendError(res, 500, err.clientMessage);
                    
                    res.json(post);
                });
            });
        });
    });
};

postController.authUser = (res, username, callback) => {
    if (!username) {
        postController.sendError(res, 401, 'You should send username in header to use this resource!');
        return callback(true, null);
    }

    User.getUserByUsername(username, (err, user) => {
        if (err) {
            postController.sendError(res, 500, 'Error during DB query');
            return callback(true, null);
        }
        if (!user) {
            postController.sendError(res, 401, `There is no registered user with usename: ${username}`);
            return callback(true, null);
        }

        callback(null, user);
    });
};

postController.sendError = (res, code, message) => {
    return res.status(code).json({ error: message });
};

module.exports.postController = postController;