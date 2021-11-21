import express from "express";
import { getPosts } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);

// router.post('/', createPost);

// router.post('/update', updatePost);

export default router