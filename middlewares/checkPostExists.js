// Data
const posts = require("../data/posts-data")

const checkPostExists = (req, res, next) => {
    console.log(req.params.id);
    idToCheck = parseInt(req.params.id);
    console.log(idToCheck);
    const findId = posts.find(curPost => curPost.id === idToCheck);
    console.log(findId);
    if (findId === undefined) {
        res.status(404);
        res.json({
            error: true,
            message: "Post not Found"
        })
    } else {
        next();
    }
}

module.exports = checkPostExists;