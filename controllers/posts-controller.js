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
    console.log("Entro in show");
    const getPost = posts.find(curPost => curPost.id === parseInt(req.params.id));
    res.json(getPost)
}

// Store
const store = (req, res) => {
    const lastId = (posts[posts.length - 1]).id;
    const newPost = {
        id: lastId + 1,
        ...req.body
    };
    posts.push(newPost);
    res.json(posts);
}

// Update
const update = (req, res) => {
    const getIndexToUpdate = posts.findIndex(curPost => curPost.id === parseInt(req.params.id));
    const updatedPost = {
        id: req.params.id,
        ...req.body
    };
    posts[getIndexToUpdate] = updatedPost;
    res.json(posts);
}

// Modify
const modify = (req, res) => {
    const postId = req.params.id;
    res.send("Aggiorno solo i dati modificati del post con id " + postId)
}

// Destroy
const destroy = (req, res) => {
    const getIndex = posts.findIndex(curPost => curPost.id === parseInt(req.params.id));
    posts.splice(getIndex, 1);
    res.sendStatus(204);
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