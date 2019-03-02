const express = require("express");
const router = express.Router();
const About = require("../../models/About");
const aboutValidationFields = require("../../validation/AboutFields");

// IDEA: this POST route its only for testing purpose
// router.post("/about",(req,res) => {
//   const newAbout = new About({
//     title: req.body.title,
//     topDescription: req.body.topDescription,
//     bottomDescription: req.body.bottomDescription,
//   })
//   newAbout
//     .save()
//     .then((aboutResp) => res.json(aboutResp))
//     .catch((err) => res.status(400).send(err))
// })

router.put("/about/:id",(req,res) => {
  const { errors, isValid } = aboutValidationFields(req.body);
  // Check validation Field
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const idToFound = req.params.id;

  About.findById(idToFound,((err,foundedAboutObj) => {
    if (err) {
      res.status(400).send(err);
    }
    foundedAboutObj.title = req.body.title;
    foundedAboutObj.topDescription = req.body.topDescription;
    foundedAboutObj.bottomDescription = req.body.bottomDescription;
    foundedAboutObj.updated = new Date();
    foundedAboutObj.save((err)=>{
      if (err) {
        res.status(400).send(err)
      }
      res.json({message:'About Page Updated',foundedAboutObj})
    })
  }))
})

module.exports = router;
