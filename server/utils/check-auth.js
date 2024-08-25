import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const checkAuth = (context) => {
  const authHeader = context.token;

  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];

    if (token) {
      try {
        const user = jwt.verify(token, JWT_SECRET);

        return user;
      } catch (e) {
        throw new Error("Invalid/Expired token");
      }
    }
    throw new Error("Authentication token must be 'Bearer[token]");
  }
  throw new Error("Authentication must be provided");
};
