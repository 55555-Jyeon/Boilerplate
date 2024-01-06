export const REGEXP = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  phone: /^010-\d{4}-\d{4}$/,
  fullName: /^[a-zA-Z]{10,}$/gi,
  Username: /^[a-zA-Z]{2,10}$/gi,
  Password: /^[0-9a-zA-Z]{8,20}$/,
};
