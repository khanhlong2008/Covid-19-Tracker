import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
    try {
        const post = new PostModel({
          title:"test",
          content:"test",  
        })
        post.save();
      const posts = await PostModel.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };
