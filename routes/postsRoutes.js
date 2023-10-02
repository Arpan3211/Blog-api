import express from 'express';
import {
    GetAllPosts,
    GetPostsById,
    newPost,
    updatePosts,
    deletePost,
} from "../controllers/postsControllers.js";
import { getLatestPost } from "../controllers/latestPostController.js";
import { authPage } from "../auth/Auth.js"
import { putValidationRules, postValidationRules, validate } from '../validations/Validation.js';


const router = express.Router();


// All Routes with validation 
router.get("/", GetAllPosts);
router.post("/", postValidationRules, validate, newPost);
router.get('/latest', authPage, getLatestPost);
router.get("/:id", GetPostsById);
router.put("/:id", putValidationRules, validate, updatePosts);
router.delete("/:id", deletePost);

export default router;