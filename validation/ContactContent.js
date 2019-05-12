const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = (field) => {
  let errors = {};
  field.titlePl = !isEmpty(field.titlePl) ? field.titlePl: "";
  field.subtitlePl = !isEmpty(field.subtitlePl) ? field.subtitlePl: "";
  // ------
  field.titleEng = !isEmpty(field.titleEng) ? field.titleEng: "";
  field.subtitleEng = !isEmpty(field.subtitleEng) ? field.subtitleEng: "";

  if (Validator.isEmpty(field.titlePl)) {
    errors.titlePl = "required";
  }
  if (Validator.isEmpty(field.subtitlePl)) {
    errors.subtitlePl = "required";
  }
  if (Validator.isEmpty(field.titleEng)) {
    errors.titleEng = "required";
  }
  if (Validator.isEmpty(field.subtitleEng)) {
    errors.subtitleEng = "required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
