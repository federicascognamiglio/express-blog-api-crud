// IMPORTED DATA
const posts = require("../data/posts-data");

// CONTROLLERS
// Index
const index = (req, res) => {
    let filteredPosts = posts;
    if (req.query.tag) {
        filteredPosts = posts.filter((curPost) => (curPost.tags.includes(req.query.tag)));
    }
    res.json(filteredPosts)
}

// Show
const show = (req, res) => {
    const getPost = posts.find((curPost) => curPost.id === parseInt(req.params.id));
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
    const getIndex = posts.findIndex((curPost) => curPost.id === parseInt(req.params.id));
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
    create,
    update,
    modify,
    destroy
}

