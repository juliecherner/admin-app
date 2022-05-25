import { AuthHeader } from "../types";
import { getTokenFromCookies } from "./cookies";

export const authHeader = (): AuthHeader => {
  const token = getTokenFromCookies();
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};
