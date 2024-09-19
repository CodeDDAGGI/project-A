import React from "react";

export const showFieldErrorMessage = (fieldErrors , setFieldErrorMessage) => {
  let EmptyfieldErrors = {
    username : <></>,
    password : <></>,
    checkPassword : <></>,
    name : <></>,
    email : <></>
  };

  for( let fieldError of fieldErrors) {
    EmptyfieldErrors = {
      ...EmptyfieldErrors,
      [fieldError.field] : <p>{fieldError.defaultMessage}</p>
    };
  }

  console.log(EmptyfieldErrors);
  setFieldErrorMessage(EmptyfieldErrors);
}