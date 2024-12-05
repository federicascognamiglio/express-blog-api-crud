// IMPORTS
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts-controller")

// ROUTERS
// Router "index"
router.get("/", postsController.index)

// Router "show"
router.get("/:id", postsController.show)

// Router "store"
router.post("/", postsController.store)

// Router "update"
router.put("/:id", postsController.update)

// Router "modify"
router.patch("/:id", postsController.modify)

// Router "destroy"
router.delete("/:id", postsController.destroy)

//EXPORTS
module.exports = router;