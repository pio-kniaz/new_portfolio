const express = require("express");
const router = express.Router();
const About = require("../../models/About");
const aboutValidationFields = require("../../validation/AboutFields");
// IDEA: this POST route its only for testing purpose
router.post("/about", (req, res) => {
  const newAbout = new About({
    // name: req.body.name,
    updated: new Date().toString(),
    // pl: req.body.pl,
    dataResponse: req.body.data,
  });
  newAbout
    .save()
    .then(aboutResp => res.json(aboutResp))
    .catch(err => res.status(400).send(err));
});
// IDEA: this POST route its only for testing purpose
// router.post("/about", (req, res) => {
//   const newAbout = new About({
//     data: {
//       title: {
//         text: req.body.title,
//         label: "Title",
//         fieldName: "title"
//       },
//       topDescription: {
//         text: req.body.topDescription,
//         label: "Top Description",
//         fieldName: "topDescription"
//       },
//       bottomDescription: {
//         text: req.body.bottomDescription,
//         label: "Bottom Description",
//         fieldName: "bottomDescription"
//       }
//     },
//     updated: new Date().toString(),
//   });
//   newAbout
//     .save()
//     .then(aboutResp => res.json(aboutResp))
//     .catch(err => res.status(400).send(err));
// });
router.get("/about", (req, res) => {
  About.find()
    .then(aboutResp => {
      res.json(aboutResp);
    })
    .catch(error => {
      res.status(400).send({ message: "Unable to retrive data" });
    });
});
router.put("/about/:id", (req, res) => {

  const { errors, isValid } = aboutValidationFields(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const idToFind = req.params.id;

  About.findOneAndUpdate({ _id: idToFind })
    .then(foundedAboutObj => {
      // PL data
      const titlePL = foundedAboutObj.dataResponse[0].pl.find((elem)=>elem.field === 'title_pl');
      const descriptionTopPL = foundedAboutObj.dataResponse[0].pl.find((elem)=>elem.field === 'description_top_pl');
      const descriptionBottomPL = foundedAboutObj.dataResponse[0].pl.find((elem)=>elem.field === 'description_bottom_pl');

      titlePL.text = req.body.title_pl;
      descriptionTopPL.text = req.body.description_top_pl;
      descriptionBottomPL.text = req.body.description_bottom_pl;

      // ENG data
      const titleENG = foundedAboutObj.dataResponse[0].eng.find((elem)=>elem.field === 'title_eng');
      const descriptionTopENG = foundedAboutObj.dataResponse[0].eng.find((elem)=>elem.field === 'description_top_eng');
      const descriptionBottomENG = foundedAboutObj.dataResponse[0].eng.find((elem)=>elem.field === 'description_bottom_eng');

      titleENG.text = req.body.title_eng;
      descriptionTopENG.text = req.body.description_top_eng;
      descriptionBottomENG.text = req.body.description_bottom_eng;
      foundedAboutObj.save(error => {
        if (error) {
          res.status(400).send(error);
        }
        res.json({ message: "About Page Updated", foundedAboutObj });
      });
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

module.exports = router;
