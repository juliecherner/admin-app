export const hidePassword = (password: string) => {
  let hidenPassword = "";
  const array = Array.from(password);
  for (let i = 0; i < array.length; i++) {
    hidenPassword += "*";
  }

  return hidenPassword;
};
