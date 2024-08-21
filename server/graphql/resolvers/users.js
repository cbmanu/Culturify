import User from "../../models/User.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { JWT_SECRET } from "../../config.js";

const findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Unable to login");
  } else {
    return user;
  }
};
const generateAuthToken = (user) => {
  const token = jwt.sign(
    { _id: user._id, email: user.email, username: user.username },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
  user.token = token;
  return user;
};

export const usersResolvers = {
  Query: {
    getUser: async (_, { token }) => {
      try {
        const user = await User.find({ token: token });
        if (user) {
          return user;
        } else {
          throw new Error(e);
        }
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  Mutation: {
    createUser: async (_, { username, email, password, age, interest }) => {
      let user = new User({
        username,
        email,
        password,
        age,
        interest,
      });

      user = generateAuthToken(user);

      const res = await user.save();

      return res;
    },
    login: async (_, { email, password }) => {
      let user = findByCredentials(email, password);
      user = generateAuthToken(user);
      return user;
    },
  },
};
