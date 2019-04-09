const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");

router.post("/project", (req, res) => {
  const newProject = new Project({
    name: req.body.name,
    url: req.body.url,
    technologies: req.body.technologies
  });
  newProject
    .save()
    .then(newProjectResp => {
      return res.json(newProject);
    })
    .catch(err => {
      return res.status(400).send(err);
    });
});

router.get("/project", (req, res) => {
  Project.find()
    .then(projects => {
      return res.json({ confirmation: "success", data: projects });
    })
    .catch(err => {
      return res.status(400).send({
        confirmation: " failed",
        message: err.message
      });
    });
});

router.get("/project/:id", (req, res) => {
  const id = req.params.id;
  Project.findById(id)
    .then(projects => {
      return res.json({ confirmation: "success", data: projects });
    })
    .catch(err => {
      res.status(400).send({
        confirmation: " failed",
        message: err.message
      });
    });
});

router.put("/project/:id", (req, res) => {
  const id = req.params.id;
  Project.findOneAndUpdate(id)
    .then(project => {
      project.hidden = !project.hidden;
      project.save((error)=> {
        if (error) {
          res.status(400).send(error);
        }
        res.json({ confirmation: "success", data: project });
      })
    })
    .catch(() => {
      res.status(400).send({ confirmation: "failed", message: err.message });
    });
});

module.exports = router;
