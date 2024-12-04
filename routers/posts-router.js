// IMPORTED DATA
const express = require("express");
const router = express.Router();
const posts = require("../data/posts-data");

// ROUTERS
// Router "index"
router.get("/", (req, res) => {
    res.json({posts, total: posts.length})
})

// Router "show"
router.get("/:id", (req, res) => {
    const postId = parseInt(req.params.id);    
    const getPost = posts.find((curPost) => curPost.id === postId);
    res.json(getPost)
})

// Router "create"
router.post("/", (req, res) => {
    res.send("Creo un nuovo post")
})

// Router "update"
router.put("/:id", (req, res) => {
    const postId = req.params.id;
    res.send("Aggiorno tutti i dati del post con id " + postId)
})

// Router "modify"
router.patch("/:id", (req, res) => {
    const postId = req.params.id;
    res.send("Aggiorno solo i dati modificati del post con id " + postId)
})

// Router "destroy"
router.delete("/:id", (req, res) => {
    const postId = req.params.id;
    res.send("Elimino il post con id " + postId)
})

module.exports = router;