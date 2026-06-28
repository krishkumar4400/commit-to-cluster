import React from "react";
import { assets } from "../../assets/assets.js";
import { useAppContext } from "../../context/AppContext.jsx";
import toast from "react-hot-toast";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const { axios } = useAppContext();
  const blogDate = new Date(createdAt);

  const deleteComment = async () => {
    try {
      const confirm = window.confirm("Are you sure you want to delete the comment");
      if(!confirm) {
        return;
      }
      const { data } = await axios.post("/api/admin/delete-comment", {
        commentId: _id,
      });
      if (data.success){
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const approveComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approve-comment", {
        commentId: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(error.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <tr className="order-y border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b>: {blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b>: {comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b>: {comment.content}
      </td>
      <td className="max-sm:hidden px-6 py-4">
        {blogDate.toLocaleDateString()}
      </td>

      <td className="px-6 py-4 ">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
            onClick={approveComment}
              src={assets.tick_icon}
              className="w-5 hover:scale-110 transition-all cursor-pointer"
              alt="tick_icon"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-200 text-green-700 rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <img
            onClick={deleteComment}
            src={assets.bin_icon}
            className="w-5 hover:scale-110 transition-all cursor-pointer"
            alt="bin_icon"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
