const express = require("express");

const app = express();

const blog = {
    id: 1,
    title: "Blog title",
    description: "Blog description"
  };

  app.get("/api/blog", (req, res) => {
    res.json(blog);
  })