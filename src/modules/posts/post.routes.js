import { Router } from "express";
import * as PC from "./post.controller.js";

const router = Router();

router.get("/", PC.getPosts)
router.post("/", PC.addPost)
router.put("/", PC.updatePost)
router.delete("/", PC.deletePost)

export default router