// EXPRESS DATA
const express = require("express");
const app = express();
const port = 3000;

// BODY PARSER
app.use(express.json());

// ROUTER
const postsRouter = require("./routers/posts-router");
app.use("/posts", postsRouter);

// app.get("/", (req, res) => {
//     res.send("Hello Routers!")
// })

// Server activation
app.listen(port, () => {
   console.log("Il Server è in ascolto");
})