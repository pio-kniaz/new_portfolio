const express = require("express");
const router = express.Router();
const About = require("../../models/About");
const aboutValidationFields = require("../../validation/AboutFields");
// IDEA: this POST route its only for testing purpose
router.post("/about", (req, res) => {
  const newAbout = new About({
    updated: new Date().toString(),
    dataResponse: req.body.data,
  });
  newAbout
    .save()
    .then(aboutResp => res.json(aboutResp))
    .catch(err => res.status(400).send(err));
});

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
      // PL data Front
      const titleFrontPl = foundedAboutObj.dataResponse[0].pl.find((elem)=>elem.field === 'title_front_pl');
      const descriptionFrontTopPl = foundedAboutObj.dataResponse[0].pl.find((elem)=>elem.field === 'description_front_top_pl');
      const descriptionFrontBottomPl = foundedAboutObj.dataResponse[0].pl.find((elem)=>elem.field === 'description_front_bottom_pl');

      titleFrontPl.text = req.body.title_front_pl;
      descriptionFrontTopPl.text = req.body.description_front_top_pl;
      descriptionFrontBottomPl.text = req.body.description_front_bottom_pl;
      // PL data Back end
      const titleBackPl = foundedAboutObj.dataResponse[0].pl.find((elem)=>elem.field === 'title_back_pl');
      const descriptionBackTopPl = foundedAboutObj.dataResponse[0].pl.find((elem)=>elem.field === 'description_back_top_pl');
      const descriptionBackBottomPl = foundedAboutObj.dataResponse[0].pl.find((elem)=>elem.field === 'description_back_bottom_pl');

      titleBackPl.text = req.body.title_back_pl;
      descriptionBackTopPl.text = req.body.description_back_top_pl;
      descriptionBackBottomPl.text = req.body.description_back_bottom_pl;

      // ENG data Front
      const titleFrontEng = foundedAboutObj.dataResponse[0].eng.find((elem)=>elem.field === 'title_front_eng');
      const descriptionFrontTopEng = foundedAboutObj.dataResponse[0].eng.find((elem)=>elem.field === 'description_front_top_eng');
      const descriptionFrontBottomEng = foundedAboutObj.dataResponse[0].eng.find((elem)=>elem.field === 'description_front_bottom_eng');

      titleFrontEng.text = req.body.title_front_eng;
      descriptionFrontTopEng.text = req.body.description_front_top_eng;
      descriptionFrontBottomEng.text = req.body.description_front_bottom_eng;
      // ENG data Back end
      const titleBackEng = foundedAboutObj.dataResponse[0].eng.find((elem)=>elem.field === 'title_back_eng');
      const descriptionBackTopEng = foundedAboutObj.dataResponse[0].eng.find((elem)=>elem.field === 'description_back_top_eng');
      const descriptionBackBottomEng = foundedAboutObj.dataResponse[0].eng.find((elem)=>elem.field === 'description_back_bottom_eng');

      titleBackEng.text = req.body.title_back_eng;
      descriptionBackTopEng.text = req.body.description_back_top_eng;
      descriptionBackBottomEng.text = req.body.description_back_bottom_eng;
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
