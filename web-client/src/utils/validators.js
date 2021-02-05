export const required = (value) => {
  if (!value) return 'Required field';

  return undefined;
}

export const maxLength = (length) => (value) => {
  if (value.length > length) return `Max length is ${length} symbols`;

  return undefined;
}