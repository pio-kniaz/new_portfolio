const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = (field) => {
  let errors = {};
  field.title = !isEmpty(field.title) ? field.title : "";
  field.topDescription = !isEmpty(field.topDescription) ? field.topDescription : "";
  field.bottomDescription = !isEmpty(field.bottomDescription) ? field.bottomDescription : "";

  // Title Field
    if (Validator.isEmpty(field.title)) {
      errors.title = "Can not be empty"
    }
  // Top Description Field
    if (Validator.isEmpty(field.topDescription)) {
      errors.topDescription = "Can not be empty"
    }
  // Bottom Description Field
    if (Validator.isEmpty(field.bottomDescription)) {
      errors.bottomDescription = "Can not be empty"
    }
    return {
      errors,
      isValid: isEmpty(errors),
    };
};
