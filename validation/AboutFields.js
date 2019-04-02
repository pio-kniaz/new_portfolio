const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = (field) => {
  let errors = {};
  field.title_pl = !isEmpty(field.title_pl) ? field.title_pl : "";
  field.description_top_pl = !isEmpty(field.description_top_pl) ? field.description_top_pl : "";
  field.description_bottom_pl = !isEmpty(field.description_bottom_pl) ? field.description_bottom_pl : "";
  field.title_eng = !isEmpty(field.title_eng) ? field.title_eng : "";
  field.description_top_eng = !isEmpty(field.description_top_eng) ? field.description_top_eng : "";
  field.description_bottom_eng = !isEmpty(field.description_bottom_eng) ? field.description_bottom_eng : "";

  // Title Field Pl
    if (Validator.isEmpty(field.title_pl)) {
      errors.title_pl = "Can not be empty"
    }
  // Top Description Pl Field
    if (Validator.isEmpty(field.description_top_pl)) {
      errors.description_top_pl = "Can not be empty"
    }
  // Bottom Description Pl Field
    if (Validator.isEmpty(field.description_top_pl)) {
      errors.description_top_pl = "Can not be empty"
    }
  // Title Field Eng
    if (Validator.isEmpty(field.title_eng)) {
      errors.title_eng = "Can not be empty"
    }
  // Top Description Eng Field
    if (Validator.isEmpty(field.description_top_eng)) {
      errors.description_top_eng = "Can not be empty"
    }
  // Bottom Description Eng Field
    if (Validator.isEmpty(field.description_bottom_eng)) {
      errors.description_bottom_eng = "Can not be empty"
    }
    return {
      errors,
      isValid: isEmpty(errors),
    };
};
