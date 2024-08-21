import { createContext, useContext } from "react";

export const userContext = createContext(undefined);

export function useUserContext() {
  const user = useContext(userContext);

  if (user === undefined) {
    throw new Error("useUserContext must be used with a userContext");
  }

  return user;
}
