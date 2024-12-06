// IMPORTS
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts-controller");
const checkPostExists = require("../middlewares/checkPostExists");

router.use(checkPostExists);

// ROUTERS
// Router "index"
router.get("/", postsController.index)

// Router "show"
router.get("/:id", checkPostExists, postsController.show)

// Router "store"
router.post("/", postsController.store)

// Router "update"
router.put("/:id", checkPostExists, postsController.update)

// Router "modify"
router.patch("/:id", checkPostExists, postsController.modify)

// Router "destroy"
router.delete("/:id", checkPostExists, postsController.destroy)

//EXPORTS
module.exports = router;