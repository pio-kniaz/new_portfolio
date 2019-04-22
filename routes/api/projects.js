const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");
const multer = require('multer');

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg)$/)) {
      return cb(new Error('file must be JPG/JPEG'))
    }
    cb(undefined, true)

    // cb(new Error('file must be JPG'))
    // cb(undefined, true)
    // cb(undefined, false)
  }
});
router.post("/project",(req, res) => {
  const newProject = new Project({
    name: req.body.name,
    url: req.body.url,
    technologies: req.body.technologies,
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

router.put("/project/images/:id", upload.single('image'),(req, res) => {
  Project.findByIdAndUpdate(req.params.id)
  .then((project)=>{
    project.image = req.file.buffer;
    project.save((error)=> {
      if (error) {
        res.status(400).send(error);
      }
      res.json({ confirmation: "success", data: project });
    })
  })
  .catch(()=>{
    res.status(404).send()
  })
})

router.post("/project/images", upload.single('upload'), async (req, res) => {
  req.project.image = req.file.buffer.toString('base64');
  await req.project.save();
  res.send();
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message });
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
router.get("/project/:id/image", (req, res) => {
  Project.findById(req.params.id)
  .then((project)=>{
    if (!project || !project.image) {
      res.status(400).send();
    }
    res.set('Content-Type', 'image/jpg');
    res.send(project.image);
  })
  .catch(()=>{
    res.status(404).send()
  })
})
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
  Project.findByIdAndUpdate(id)
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
