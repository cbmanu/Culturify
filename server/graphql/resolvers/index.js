import { postsResolvers } from "./posts.js";
import { usersResolvers } from "./users.js";

export const resolvers = {
  Post: {
    //Modifier
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
    assistsCount: (parent) => parent.assists.length,
  },
  Query: {
    ...postsResolvers.Query,
    ...usersResolvers.Query,
  },
  Mutation: {
    ...postsResolvers.Mutation,
    ...usersResolvers.Mutation,
  },
};
