import Post from "../../models/Post.js";
import File from "../../models/File.js";
import { checkAuth } from "../../utils/check-auth.js";
import { readFile } from "../../utils/file.js";
import { commentResolvers } from "./comments.js";

export const postsResolvers = {
  Query: {
    getPosts: async () => {
      try {
        const posts = await Post.find().sort({ createdAt: -1 });
        return posts;
      } catch (e) {
        throw new Error(e);
      }
    },
    getPost: async (_, { postId }) => {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error("Post not found");
        }
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  Mutation: {
    createPost: async (_, { title, body, img }, contextValue) => {
      const user = checkAuth(contextValue);

      if (body.trim() == "" && title.trim() == "") {
        throw new Error("Post must not be empty");
      }

      const newPost = new Post({
        title,
        body,
        user: user._id,
        username: user.username,
        img,
        createdAt: new Date().toISOString(),
      });
      const post = await newPost.save();
      return post;
    },
    deletePost: async (_, { postId }, contextValue) => {
      const user = checkAuth(contextValue);
      if (user) {
        try {
          const post = await Post.findById(postId);
          if (post) {
            await post.deleteOne({ username: post.username });
            return "Post deleted";
          } else {
            throw new Error("There is no Post");
          }
        } catch (e) {
          throw new Error(e);
        }
      } else {
        throw new Error("Action not allowed");
      }
    },
    ...commentResolvers.Mutation,
  },
};
