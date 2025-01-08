const posts = require("../data/posts-data");

const index = (req, res) => {
    const tags = [];

    for (let i = 0; i < posts.length; i++ ) {
        const postTags = posts[i].tags;
        for (let j = 0; j < postTags.length; i++) {
            const curTag = postTags[j];
            if(!tags.includes(curTag)) {
                tags.push(curTag);
            }
        }
    }

    res.json({
        tags,
        tot: tags.length
    })
}

module.exports = {index}