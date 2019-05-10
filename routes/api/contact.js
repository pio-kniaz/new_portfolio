const express = require("express");
const router = express.Router();
const Contact = require("../../models/Contact");
const Email = require("../../models/Email");
const contactValidationFields = require("../../validation/EmailFields");

router.post("/contact", (req, res) => {
  const newContact = new Contact({
    updated: new Date().toString(),
    dataResponse: req.body.data
  });
  newContact
    .save()
    .then(contactResp => res.json(contactResp))
    .catch(err => res.status(400).send(err));
});

router.get("/contact", (reg, res) => {
  Contact.find()
    .then((contactResp)=> {
      res.json(contactResp)
    })
    .catch(error => {
      res.status(400).send({ message: "Unable to retrive data" });
    });
})

// Email

router.get("/contact/email", (req, res) => {
  Email.find()
    .then((emailResp)=>{
      res.json(emailResp)
    })
    .catch((error)=>{
      res.status(400).send({ message: "Unable to retrive data" });
    });
});

router.post("/contact/email", (req, res)=>{
  const { errors, isValid } = contactValidationFields(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const selectedLanguage = req.body.contact_language;
  const newEmail = new Email({
    name: req.body.contact_name,
    email: req.body.contact_email,
    message: req.body.contact_message,
    date: new Date().toString(),
  });
  newEmail
    .save()
      .then((emailResp)=>res.json(
        selectedLanguage === "eng"
        ? `Thank you for your message ${emailResp.name}`
        : `Dziekuje za wiadomość ${emailResp.name}`
       )
      )
      .catch((err) =>res.status(400).send({
        errorMessage: err,
        message: "Unable to send email"
      }));
});
router.delete("/contact/email/:id", (req, res)=>{
  const id = req.params.id;
  Email.findByIdAndDelete(id)
    .then((emailToDel)=>{
      res.json({
        data: emailToDel._id,
        date: emailToDel.date,
      })
    })
    .catch((err)=>{
      res.status(400).send({
        data: 'Unable to remove email',
        message: err.message,
      })
    })
})

module.exports = router;
