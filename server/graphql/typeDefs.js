import { gql } from "graphql-tag";

export const typeDefs = gql`
  #graphql
  type Query {
    hello: String
    users: [User]
  }
  type Mutation {
    createUser(
      name: String
      email: String
      password: String
      age: String
      interest: [String]
    ): User
  }
  type User {
    _id: ID
    name: String
    email: String
    password: String
    age: String
    interest: [String]
    createdAt: String
    updatedAt: String
  }
`;
