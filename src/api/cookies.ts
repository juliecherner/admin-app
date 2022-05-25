export const getTokenFromCookies = (): string => {
  return document.cookie.slice(6);
};

export const setCookies = (token: string): void => {
  if (token.length > 0) {
    document.cookie = `token=${token}; path=/`;
  }
};

export const deleteToken = (): void => {
  document.cookie = `token=; path=/`;
};
