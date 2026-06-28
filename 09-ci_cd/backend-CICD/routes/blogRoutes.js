import { Router } from "express";
import {
    addComment,
  addNewBlog,
  deleteBlogById,
  getAllBlogs,
  getBlogById,
  getBlogComment,
  togglePublish,
} from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";
import auth from "../middlewares/auth.js";
import { postBlog } from "../controllers/postBlog.js";

const blogRouter = Router();

blogRouter.post("/add-blog", upload.single("image"),auth, addNewBlog);
blogRouter.get("/get-all-blogs", getAllBlogs);
blogRouter.get("/get-blog/:blogId", getBlogById);
blogRouter.post("/delete", auth, deleteBlogById);
blogRouter.post("/toggle-publish", auth, togglePublish);
blogRouter.post('/add-comment', addComment);
blogRouter.post('/comments', getBlogComment);
blogRouter.post('/post-blog', postBlog);

export default blogRouter;
