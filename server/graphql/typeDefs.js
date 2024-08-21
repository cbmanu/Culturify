import { gql } from "graphql-tag";

export const typeDefs = gql`
  #graphql
  type Query {
    users: [User]
    getUser(token: String!): [User]
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    createUser(
      username: String!
      email: String!
      password: String!
      age: String!
      interest: [String]!
    ): User
    login(email: String!, password: String!): User!
    createPost(title: String!, body: String!, img: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: String!): Post!
    likePost(postId: ID!): Post!
    assistPost(postId: ID!): Post!
  }
  type User {
    _id: ID!
    username: String
    password: String!
    email: String!
    age: String
    interest: [String]
    token: String
    createdAt: String
    updatedAt: String
  }

  type Post {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    img: String!
    likes: [Like]!
    assists: [Assist]!
    likeCount: Int!
    commentCount: Int!
    postsCount: Int!
    assistsCount: Int!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }

  type Assist {
    id: ID!
    createdAt: String!
    username: String!
  }
`;
