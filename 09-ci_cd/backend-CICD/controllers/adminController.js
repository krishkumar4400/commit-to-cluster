import jwt from "jsonwebtoken";
import Blog from "../Model/Blog.js";
import Comment from "../Model/Comment.js";
import main from "../config/gemini.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        message: "Missing details",
        success: false,
      });
    }

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({
        message: "incorrect email or password",
        success: false,
      });
    }

    const token = jwt.sign(
      {
        email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      token,
      success: true,
      message: "You are logged in"
    });
  } catch (error) {
    console.log(error.message)
    res.json({
      message: error.message,
      success: false,
    });
  }
};

export const getAllBlogsAdmin = async (req,res) => {
  try {
    const blogs = await Blog.find({}).sort({createdAt: -1});
    
    res.json({
      blogs, 
      success: true 
    });

  } catch (error) {
    console.log(error.message);
    return res.json({
      message: "can't get blog",
      success: false 
    });
  }
}

export const getAllcomments = async (req,res) => {
  try {
    const comments = await Comment.find({}).populate("blog").sort({createdAt: -1});
    res.json({
      comments, 
      success: true 
    });

  } catch (error) {
    console.log(error.message);
  }
}

export const getDashboardData = async (req,res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({createdAt: -1}).limit(5);
    const blogs = await Blog.countDocuments();
    const comments = await Comment.countDocuments();
    const drafts = await Blog.countDocuments({isPublished: false});

    const dashboardData = {
      recentBlogs, blogs, comments, drafts 
    };

    res.json({
      dashboardData,
      success: true 
    });

  } catch (error) {
    console.log(error.message);
  }
}

export const deleteComment = async (req,res) => {
  try {
    const {commentId} = req.body;

    await Comment.findByIdAndDelete(commentId);

    res.json({
      message: "comment deleted successfully",
      success: true 
    });

  } catch (error) {
    console.log(error.message);
    res.json({
      message: "can't delete the comment",
      success: false 
    });
  }
}

export const approveComment = async (req,res) => {
  try {
    const {commentId} = req.body;
    const comment = await Comment.findByIdAndUpdate(commentId, {isApproved : true});

    res.json({
      message: "comment approved successfully",
      success: true,
    });

  } catch (error) {
    console.log(error.message);
    res.json({
      message: "can't approve the comment",
      success: false 
    });
  }
}

export const logout = async (req,res) => {
  try {
    res.json({
      message: 'you are logged out',
      success: true 
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: "logout failed",
      success: false 
    });
  }
}

export const generateContent = async (req,res) => {
  try {
    const {prompt} = req.body;
    const content = await main(prompt + " Generate a blog content for this topic in simple text format");
    res.json({
      content,
      success: true,
      message: "content generated" 
    });
    
  } catch (error) {
    console.log(error.message);
    return res.json({
      message: "can't generate the content" 
    });
  }
}
