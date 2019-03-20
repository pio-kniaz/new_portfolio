const express = require("express");
const router = express.Router();
const About = require("../../models/About");
const aboutValidationFields = require("../../validation/AboutFields");
// IDEA: this POST route its only for testing purpose
router.post("/about",(req,res) => {
  // const newAbout = new About({
  //   title: req.body.title,
  //   topDescription: req.body.topDescription,
  //   bottomDescription: req.body.bottomDescription,
  //   updated: new Date().toString(),
  // })
  // test
  var product = new About({
    name: req.body.name,
    conditions: req.body.conditions,
    colors: req.body.colors
});
  product
    .save()
    .then((aboutResp) => res.json(aboutResp))
    .catch((err) => res.status(400).send(err))
})
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
router.put("/about/:id",(req,res) => {
  const { errors, isValid } = aboutValidationFields(req.body);
  // Check validation Field
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }
  const idToFind = req.params.id;

  About.findOneAndUpdate({"id":"56a53ba04ce46bf01ae2bda7"})
  // About.findOneAndUpdate({
  //     "_id": "5c916c996c91ff6fb395198a",
  //     "id": "56a53ba04ce46bf01ae2bda7"
  // }, {
  //     "$set": {
  //         "id.$.name": "wxyz"
  //     }
  // }, function(error, success) {
  //     if (error) throw error
  //
  //     res.json({
  //         message: 'Success'
  //     })
  // })
  // console.log(req.body);
    .then((foundedAboutObj) => {
      const reducedRequest = req.body.reduce((acc,item)=>{return {...item}},{})
      // console.log(reducedRequest.name,'name');
      // console.log(reducedRequest,'reducedRequest');
      // foundedAboutObj.name = reducedRequest.name;
      foundedAboutObj.conditions1 = reducedRequest.conditions1;
      foundedAboutObj.conditions2 = reducedRequest.conditions2;
      console.log(foundedAboutObj.colors,'new');

      foundedAboutObj.save((error)=>{
        console.log('save');
        if (error) {
          res.status(400).send(error)
        }
        console.log(foundedAboutObj.name);
        res.json({message:'About Page Updated',foundedAboutObj})
      })
    })
    .catch((error)=> {
      res.status(400).send(error);
    })
})

module.exports = router;
