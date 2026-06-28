import Blog from "../Model/Blog.js";

export const postBlog = async (req, res) => {
  try {
    const { title, subTitle, description, image, category, isPublished } =
      req.body;
    await Blog.create({
      title,
      subTitle,
      description,
      image,
      category,
      isPublished,
    });
    res.json({
      message: "Blog published successfully",
      success: true 
    });
    
  } catch (error) {
    console.log(error.message);
  }
};
