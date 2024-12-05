// IMPORTED DATA
const posts = require("../data/posts-data");

// CONTROLLERS
// Index
const index = (req, res) => {
    let filteredPosts = posts;
    if (req.query.tag) {
        filteredPosts = posts.filter(curPost => (curPost.tags.includes(req.query.tag.toLowerCase())));
    }
    res.json(filteredPosts)
}

// Show
const show = (req, res) => {
    const getPost = posts.find(curPost => curPost.id === parseInt(req.params.id));
    if (getPost === undefined) {
        res.status(404);
        res.json({
            error: true,
            message: "Post not found"
        })
    } else {
        res.json(getPost)
    }
}

// Store
const store = (req, res) => {
   const newPost = req.body;
   const lastId = (posts[posts.length -1]).id;
   newPost.id = lastId + 1;
   posts.push(newPost);
   res.json(posts);
}

// Update
const update = (req, res) => {
    const postId = parseInt(req.params.id);
    const getIndexToUpdate = posts.findIndex(curPost => curPost.id === postId);
    const updatedPost = req.body;
    if (getIndexToUpdate === -1) {
        res.status(404);
        res.json({
            error: true,
            message: "Post not Found"
        })
    } else {
        updatedPost.id = postId;
        posts[getIndexToUpdate] = updatedPost;
        res.json(posts);
    }
}

// Modify
const modify = (req, res) => {
    const postId = req.params.id;
    res.send("Aggiorno solo i dati modificati del post con id " + postId)
}

// Destroy
const destroy = (req, res) => {
    const getIndex = posts.findIndex(curPost => curPost.id === parseInt(req.params.id));
    if (getIndex === -1) {
        res.status(404);
        res.json({
            error: true,
            message: "Post not found"
        })
    } else {
        posts.splice(getIndex, 1);
        console.log(posts);
        res.sendStatus(204);
    }
}

// EXPORT
module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}

