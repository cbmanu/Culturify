import Users from "../models/Users.js";

export const resolvers = {
  Query: {
    hello: () => "Hello world",
    users: async () => {
      return await Users.find();
    },
  },
  Mutation: {
    createUser: async (_, { name, email, password, age, interest }) => {
      const user = new Users({
        name,
        email,
        password,
        age,
        interest,
      });
      const savedUser = await user.save();
      return savedUser;
    },
  },
};
