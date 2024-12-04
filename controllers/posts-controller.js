// IMPORTED DATA
const posts = require("../data/posts-data");

// CONTROLLERS
// Index
const index = (req, res) => {
    res.json({posts, total: posts.length})
}

// Show
const show = (req, res) => {
    const postId = parseInt(req.params.id);    
    const getPost = posts.find((curPost) => curPost.id === postId);
    res.json(getPost)
}

// Create
const create = (req, res) => {
    res.send("Creo un nuovo post")
}

// Update
const update = (req, res) => {
    const postId = req.params.id;
    res.send("Aggiorno tutti i dati del post con id " + postId)
}

// Modify
const modify = (req, res) => {
    const postId = req.params.id;
    res.send("Aggiorno solo i dati modificati del post con id " + postId)
}

// Destroy
const destroy = (req, res) => {
    const postId = req.params.id;
    res.send("Elimino il post con id " + postId)
}

// EXPORT
module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}

