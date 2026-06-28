import mongoose from "mongoose";
import imageKit from "../config/imageKit.js";
import Blog from "../Model/Blog.js";
import fs from "fs";
import Comment from "../Model/Comment.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.json({
      blogs,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addNewBlog = async (req, res) => {
  try {
    const { title, subTitle, description, isPublished, category } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    // check if all fields are present
    if (!title || !description || !category || !imageFile) {
      return res.json({
        message: "Mising required fields",
        success: false,
      });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    // upload image to imagekit
    const response = await imageKit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // optimize through imagekit URL transformation
    const optimizedImageURL = imageKit.url({
      path: response.filePath,
      transformations: [
        { quality: "auto" }, // auto compression
        { format: "webp" }, // convert to modern format
        { width: "1280" }, // width resizing
      ],
    });

    const image = optimizedImageURL;

    await Blog.create({
      title,
      subTitle,
      description,
      isPublished,
      category,
      image,
    });

    // await Blog.save();

    res.json({
      message: "Blog added successfully",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: "Server is not responding",
      success: false,
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    if (!blogId) {
      return res.json({
        message: "can't get a blog",
        success: false,
      });
    }

    // validate mongodb objectid
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.json({
        message: "Invalid Blog ID format",
        success: false,
      });
    }

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.json({
        message: "Blog not found",
        success: false,
      });
    }

    res.json({
      blog,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: "server is not responding",
      success: false,
    });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const { blogId } = req.body;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.json({
        message: "Blog not found",
        success: false,
      });
    }

    await Blog.findByIdAndDelete(blogId);

    //  Delete all comments associated with the blog
    await Comment.deleteMany({ blog: blogId });

    res.json({
      message: "blog deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: "server not responding",
    });
  }
};

export const togglePublish = async (req, res) => {
  try {
    const { blogId } = req.body;

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.json({
        message: "Blog not found",
        success: false,
      });
    }

    blog.isPublished = !blog.isPublished;

    await blog.save();

    res.json({
      message: "blog status updated",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.json({
      message: "server is not responding",
      success: false,
    });
  }
};

export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;
    await Comment.create({
      name,
      content,
      blog,
    });

    res.json({
      message: "comment added for review",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.json({
      message: "can't add a comment",
      success: false,
    });
  }
};

export const getBlogComment = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({ blog: blogId, isApproved: true }).sort({
      createdAt: -1,
    });
    res.json({
      comments,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};
