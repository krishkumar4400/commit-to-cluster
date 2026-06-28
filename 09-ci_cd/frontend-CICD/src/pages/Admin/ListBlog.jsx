import React, { useEffect, useState } from "react";
import BlogTableItems from "../../components/Admin/BlogTableItems.jsx";
import { useAppContext } from "../../context/AppContext.jsx";
import toast from "react-hot-toast";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const {axios} = useAppContext();
  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/admin/all-blogs");
      if(data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [blogs, setBlogs]);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-14 sm:pl-16 bg-blue-50/50 scroll-smooth">
      <h1 className="text-lg font-semibold text-gray-700">All blogs</h1>
      <div className="relative mt-4 h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-600 text-left uppercase">
            <tr>
              <th className="px-2 py-4 xl:px-6" scope="col">
                #
              </th>
              <th className="px-2 py-4" scope="col">
                Blog Title
              </th>
              <th className="px-2 py-4 max-sm:hidden" scope="col">
                Date
              </th>
              <th className="px-2 py-4 max-sm:hidden" scope="col">
                Status
              </th>
              <th className="px-2 py-4" scope="col">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog, index) => {
              return (
                <BlogTableItems
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
