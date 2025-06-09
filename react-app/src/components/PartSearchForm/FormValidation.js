import React from "react";

export const FormValidation = (values) => {
  let errors = {};

  if (!values.make || !values.model || !values.partType) {
    errors.make = "Please select all fields";
  }

  return errors;
}
