export const required = (value) => {
  if (!value) return 'Required field';

  return undefined;
}

export const maxLength = (length) => (value) => {
  if (value.length > length) return `Max length is ${length} symbols`;

  return undefined;
}

export const minLength = (length) => (value) => {
  if (value.length < length) return `Min length is ${length} symbols`;

  return undefined;
}

export const validateEmail = (email) => {
  const reg = /\S+@\S+\.\S+/;
  if (!reg.test(email)) return `Invalid e-mail`;
  
  return undefined;
}

export const validatePassword = (password) => {
  const reg = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
  if (!reg.test(password)) return `Password example: expQ123!`;
  
  return undefined;
}