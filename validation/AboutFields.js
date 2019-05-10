const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = (field) => {
  let errors = {};
  field.title_front_pl = !isEmpty(field.title_front_pl) ? field.title_front_pl : "";
  field.title_front_eng = !isEmpty(field.title_front_eng) ? field.title_front_eng : "";
  field.title_back_pl = !isEmpty(field.title_back_pl) ? field.title_back_pl : "";
  field.title_back_eng = !isEmpty(field.title_back_eng) ? field.title_back_eng : "";
  field.description_front_top_pl = !isEmpty(field.description_front_top_pl) ? field.description_front_top_pl : "";
  field.description_front_top_eng = !isEmpty(field.description_front_top_eng) ? field.description_front_top_eng : "";
  field.description_back_top_pl = !isEmpty(field.description_back_top_pl) ? field.description_back_top_pl : "";
  field.description_back_top_eng = !isEmpty(field.description_back_top_eng) ? field.description_back_top_eng : "";
  field.description_front_bottom_pl = !isEmpty(field.description_front_bottom_pl) ? field.description_front_bottom_pl : "";
  field.description_front_bottom_eng = !isEmpty(field.description_front_bottom_eng) ? field.description_front_bottom_eng : "";
  field.description_back_bottom_pl = !isEmpty(field.description_back_bottom_pl) ? field.description_back_bottom_pl : "";
  field.description_back_bottom_eng = !isEmpty(field.description_back_bottom_eng) ? field.description_back_bottom_eng : "";

  // Title Field Pl
    if (Validator.isEmpty(field.title_front_pl)) {
      errors.title_front_pl = "Can not be empty"
    }
    if (Validator.isEmpty(field.title_back_pl)) {
      errors.title_back_pl = "Can not be empty"
    }
    if (Validator.isEmpty(field.title_front_eng)) {
      errors.title_front_eng = "Can not be empty"
    }
    if (Validator.isEmpty(field.title_back_eng)) {
      errors.title_back_eng = "Can not be empty"
    }
  // Top Description Pl Field
    if (Validator.isEmpty(field.description_front_top_pl)) {
      errors.description_front_top_pl = "Can not be empty"
    }
    if (Validator.isEmpty(field.description_back_top_pl)) {
      errors.description_back_top_pl = "Can not be empty"
    }
    if (Validator.isEmpty(field.description_front_top_eng)) {
      errors.description_front_top_eng = "Can not be empty"
    }
    if (Validator.isEmpty(field.description_back_top_eng)) {
      errors.description_back_top_eng = "Can not be empty"
    }
  // Bottom Description Pl Field
    if (Validator.isEmpty(field.description_front_bottom_pl)) {
      errors.description_front_bottom_pl = "Can not be empty"
    }
    if (Validator.isEmpty(field.description_front_bottom_eng)) {
      errors.description_front_bottom_eng = "Can not be empty"
    }
    if (Validator.isEmpty(field.description_back_bottom_pl)) {
      errors.description_back_bottom_pl = "Can not be empty"
    }
    if (Validator.isEmpty(field.description_back_bottom_eng)) {
      errors.description_back_bottom_eng = "Can not be empty"
    }
    return {
      errors,
      isValid: isEmpty(errors),
    };
};
