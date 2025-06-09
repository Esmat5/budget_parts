import React from "react";

export const FormValidation = (values) => {
  let errors = {};

  if (!values.make || !values.model || !values.partType) {
    errors.make = "Please Select All Fields";
  }

  return errors;
}
