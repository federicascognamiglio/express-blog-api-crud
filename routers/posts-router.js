// IMPORTS
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts-controller")

// ROUTERS
// Router "index"
router.get("/", postsController.index)

// Router "show"
router.get("/:id", postsController.show)

// Router "create"
router.post("/", postsController.create)

// Router "update"
router.put("/:id", postsController.update)

// Router "modify"
router.patch("/:id", )

// Router "destroy"
router.delete("/:id", postsController.destroy)

//EXPORTS
module.exports = router;