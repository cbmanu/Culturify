import { gql } from "@apollo/client";

export const GET_POST = gql`
  query {
    getPosts {
      _id
      title
      body
      username
      comments {
        username
        body
      }

      likes {
        id
        username
      }
      img
      likeCount
      commentCount
      createdAt
    }
  }
`;
export const CREATE_POST = gql`
  mutation ($title: String!, $body: String!, $img: String!) {
    createPost(title: $title, body: $body, img: $img) {
      _id
      title
      body
      img
    }
  }
`;
