const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = (field) => {
  let errors = {};
  field.contact_name = !isEmpty(field.contact_name) ? field.contact_name: "";
  field.contact_email = !isEmpty(field.contact_email) ? field.contact_email: "";
  field.contact_subject = !isEmpty(field.contact_subject) ? field.contact_subject: "";
  field.contact_message = !isEmpty(field.contact_message) ? field.contact_message: "";

  if (field.contact_language === "ENG") {
    if (Validator.isEmpty(field.contact_name)) {
      errors.contact_name = "Name is required";
    }
    if (Validator.isEmpty(field.contact_email)) {
      errors.contact_email = "Email is required";
    }
    if (Validator.isEmpty(field.contact_subject)) {
      errors.contact_subject = "Subject is required";
    }
    if (Validator.isEmpty(field.contact_message)) {
      errors.contact_message = "Message is required";
    }
    if (!Validator.isLength(field.contact_message, { min:0, max: 600 } )) {
      errors.contact_message = "Message is to loong";
    }
  } else {
    if (Validator.isEmpty(field.contact_name)) {
      errors.contact_name = "Imie jest obowiazowe";
    }
    if (Validator.isEmpty(field.contact_email)) {
      errors.contact_email = "Email jest obowiazkowy";
    }
    if (Validator.isEmpty(field.contact_subject)) {
      errors.contact_subject = "Temat jest obowiazkowy";
    }
    if (Validator.isEmpty(field.contact_message)) {
      errors.contact_message = "Raczej nie odpowiem na pusta wiadomość";
    }
    if (!Validator.isLength(field.contact_message, { min:0, max: 600 } )) {
      errors.contact_message = "Wiadomość jest za dluga";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
