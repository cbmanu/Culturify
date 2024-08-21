import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const checkAuth = (context) => {
  console.log(context);

  const authHeader = context.token;
  console.log(authHeader);

  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    console.log(token);

    if (token) {
      try {
        const user = jwt.verify(token, JWT_SECRET);
        console.log(JWT_SECRET);

        return user;
      } catch (e) {
        throw new Error("Invalid/Expired token");
      }
    }
    throw new Error("Authentication token must be 'Bearer[token]");
  }
  throw new Error("Authentication must be provided");
};
