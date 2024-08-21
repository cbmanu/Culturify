import Post from "../../models/Post.js";
import { checkAuth } from "../../utils/check-auth.js";

export const commentResolvers = {
  Mutation: {
    createComment: async (_, { postId, body }, contextValue) => {
      const { username } = checkAuth(contextValue);
      if (body.trim() === "") {
        throw new Error("Empty comment");
      }
      const post = await Post.findById(postId);
      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });
        await post.save();
        return post;
      } else throw new Error("Post not found");
    },
    deleteComment: async (_, { postId, commentId }, contextValue) => {
      const { username } = checkAuth(contextValue);

      const post = await Post.findById(postId);
      if (post) {
        const commentIndex = post.comments.findIndex((c) => c.id === commentId);
        if (post.comments[commentIndex].username === username) {
          await post.comments.splice(commentIndex, 1);
          return post;
        } else {
          throw new Error("Action not allowed");
        }
      } else {
        throw new Error("Post not found");
      }
    },
    likePost: async (_, { postId }, contextValue) => {
      const { username } = checkAuth(contextValue);

      const post = await Post.findById(postId);
      if (post) {
        if (post.likes.find((like) => like.username === username)) {
          post.likes = post.likes.filter((like) => like.username !== username);
          await post.save();
        } else {
          post.likes.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }
        await post.save();
        return post;
      } else {
        throw new Error("Post not found");
      }
    },
    assistPost: async (_, { postId }, contextValue) => {
      const { username } = checkAuth(contextValue);

      const post = await Post.findById(postId);
      if (post) {
        if (post.assists.find((assist) => assist.username === username)) {
          post.assists = post.assists.filter(
            (assist) => assist.username !== username
          );
          await post.save();
        } else {
          post.assists.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }
        console.log(post);

        await post.save();
        return post;
      } else {
        throw new Error("Post not found");
      }
    },
  },
};
