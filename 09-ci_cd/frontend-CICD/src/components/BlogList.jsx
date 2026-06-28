import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { blog_data, blogCategories } from "../assets/assets";
import {motion, spring} from 'motion/react';
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const {blogs, input} = useAppContext();

  const filteredBlogs = () => {
    if(input === '') {
      return blogs;
    }

    return blogs.filter((blog) => blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()));
  }

  return (
    <div className="mt-8">
      {/* Category Buttons */}
      <div className="flex items-center justify-center gap-3 px-4 mb-10 relative flex-wrap">
        {blogCategories.map((category, index) => (
          <motion.div
          transition={{type:spring, stiffness: 500, damping:30}}
            onClick={() => setMenu(category)}
            key={index}
            className={`px-6 py-2 text-sm font-medium rounded-full border border-gray-300 transition-all duration-200 relative cursor-pointer
              ${
                menu === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
          >
            {category}
          </motion.div>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-25 mx-8 ms:mx-15 xl:mx-40">
        {
          filteredBlogs().filter((blog) => menu === "All" ? true : blog.category === menu).map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        }
      </div>
    </div>
  );
};

export default BlogList;
