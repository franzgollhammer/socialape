// VALIDDATION HELPERS

// Check if input field is empty
const isEmpty = string => {
  if (string.trim() === "") {
    return true;
  } else {
    return false;
  }
};

// Check if valid email adress
const isEmail = string => {
  const regEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (string.match(regEx)) {
    return true;
  } else {
    return false;
  }
};

// Validate signup
exports.validateSignUpData = data => {
  const errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Must not be empty!";
  } else if (!isEmail(data.email)) {
    errors.email = "Must be a valid email adress!";
  }
  //TODO: Check validation!
  if (isEmpty(data.password)) errors.password = "Must not be empty!";
  if (data.password !== data.confirmPassword)
    errors.password = "Passwords must match!";
  if (isEmpty(data.handle)) errors.handle = "Must not be empty!";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

// Validate login
exports.validateLogInData = data => {
  let errors = {};

  //TODO: Check validation!
  if (isEmpty(data.email)) errors.email = "Must not be empty!";
  if (isEmpty(data.password)) errors.password = "Must not be empty!";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

// reduce user details to existing ones
exports.reduceUserDetails = data => {
  let userDetails = {};

  if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
  if (!isEmpty(data.location.trim())) userDetails.location = data.location;
  if (!isEmpty(data.website.trim())) {
    if (data.website.trim().substring(0, 4) !== "http") {
      userDetails.website = `http://${data.website.trim()}`;
    } else {
      userDetails.website = data.website;
    }
  }
  console.log(userDetails);
  return userDetails;
};
