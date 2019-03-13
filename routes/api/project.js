const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");

router.post("/projects",(req,res) => {
  const newProject = new Project({
    title: req.body.title,
    technologies: req.body.technologies,
    image: req.body.image
  });
  newProject
    .save()
    .then((projectResp) => res.json(projectResp))
    .catch((err) => res.status(400).send(err))
});

module.exports = router;
