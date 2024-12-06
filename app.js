// EXPRESS DATA
const express = require("express");
const app = express();
const port = 3000;
const errorHandler = require("./middlewares/handleErrors");

// BODY PARSER
app.use(express.json());

// ROUTER
const postsRouter = require("./routers/posts-router");
app.use("/posts", postsRouter);

// app.get("/", (req, res) => {
//     res.send("Hello Routers!")
// })

// Error Handler
app.use(errorHandler);

// Server activation
app.listen(port, () => {
   console.log("Il Server è in ascolto");
})