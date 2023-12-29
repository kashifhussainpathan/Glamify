export const username = {
  id: 1,
  name: "username",
  type: "text",
  placeholder: "Username",
  errorMessage:
    "Username should be 3-16 characters and shouldn't include any special character!",
  label: "Username",
  pattern: "^[A-Za-z0-9]{3,16}$",
  required: true,
};

export const email = {
  id: 2,
  name: "email",
  type: "email",
  placeholder: "Email",
  errorMessage: "Please enter a valid email address!",
  label: "Email",
  required: true,
};
