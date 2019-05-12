const express = require("express");
const router = express.Router();
const Contact = require("../../models/Contact");
const Email = require("../../models/Email");
const emailValidationFields = require("../../validation/EmailFields");
const contentValidationFields = require("../../validation/ContactContent");
const nodeMailer = require("nodemailer");
require('dotenv').config();

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

router.put("/contact/:id", (req, res) => {
  const { errors, isValid } = contentValidationFields(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const idToFind = req.params.id;
  Contact.findOneAndUpdate({ _id: idToFind })
    .then((foundedContactObj)=> {
      //  PL data
      const titlePl = foundedContactObj.dataResponse[0].pl[0].title = req.body.titlePl;
      const subtitlePl = foundedContactObj.dataResponse[0].pl[0].subtitle = req.body.subtitlePl;
      // ENG data
      const titleEng = foundedContactObj.dataResponse[0].eng[0].title = req.body.titleEng;
      const subtitleEbg = foundedContactObj.dataResponse[0].eng[0].subtitle = req.body.subtitleEng;
      // Update
      const updateTimeStamp = foundedContactObj.updated = new Date().toString();
      foundedContactObj.save((error)=>{
        if (error) {
          res.status(400).send(error);
        }
        res.json(updateTimeStamp)
      })
    })
    .catch(error => {
      res.status(400).send(error);
    });
})

// Email

router.post('/contact/email', (req, res) => {
  const { errors, isValid } = emailValidationFields(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
const selectedLanguage = req.body.contact_language;
  nodeMailer.createTestAccount((err, account)=>{
    const htmlEmial = `
      <h3> Contact Details </h3>
        <ul>
          <li>${req.body.contact_name} </li>
          <li>${req.body.contact_email} </li>
        </ul>
      <h3>Message</h3>
      <p>${req.body.contact_message}</p>
    `
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
      from: req.body.contact_email,
      to: process.env.EMAIL,
      subject: 'New Message',
      text: req.body.contact_message,
      html: htmlEmial
    };
    transporter.sendMail(mailOptions, (err, info)=> {
      if (err) {
        if (selectedLanguage === 'pl') {
          return res.status(400).json({ message: 'Nie można wyłac wiadomości'})
        } else {
          return res.status(400).json({ message: 'Unable to send message'})
        }
      }
      if (selectedLanguage === 'pl') {
        return res.json({ message: `Dziekuje za wiadomosc ${req.body.contact_name}` })
      }
      else {
        return res.json({ message: `Thank you for your message ${req.body.contact_name}` })
      }
          // console.log('Message %s sent: %s', info.messageId, info.response);
          // console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
    })
  })
});

module.exports = router;
