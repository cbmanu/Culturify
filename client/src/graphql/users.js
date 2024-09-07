import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation (
    $username: String!
    $age: String!
    $email: String!
    $password: String!
    $interest: [String]!
  ) {
    createUser(
      username: $username
      age: $age
      email: $email
      password: $password
      interest: $interest
    ) {
      _id
      token
    }
  }
`;
export const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      token
    }
  }
`;
export const GET_USER = gql`
  query ($token: String!) {
    getUser(token: $token) {
      _id
    }
  }
`;
