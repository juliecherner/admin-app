import { createContext } from "react";
import { Response } from "../types";

type ResponseContent = {
  response: Response;
  setAndClearResponse: (response: Response) => void;
};

export const ResponseContext = createContext<ResponseContent>({
  response: {
    text: "",
    severity: "",
  },
  setAndClearResponse: () => null,
});
