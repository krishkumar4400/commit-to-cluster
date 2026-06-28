import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets';
import CommentTableItem from '../../components/Admin/CommentTableItem';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';

const Comments = () => {
  const {axios} = useAppContext();
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const fetchCommentsData = async () => {
    try {
      const {data} = await axios.get('/api/admin/comments');
      if(data.success) {
        setComments(data.comments);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  useEffect (() => {
    fetchCommentsData();
  }, [comments, setComments]);

  return (
    <div className="flex-1 bg-blue-50/50 px-5 pt-5 sm:pt-12 sm:pl-16">
      <div className="flex justify-between items-center max-w-3xl">
        <h1>Comments</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setFilter("Approved")}
            className={`shadow border rounded-full px-4 py-1 cursor-pointer text-xs ${
              filter === "Approved" ? "text-primary" : "text-gray-700"
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("Not Approved")}
            className={`shadow border rounded-full px-4 py-1 cursor-pointer text-xs ${
              filter === "Not Approved" ? "text-primary" : "text-gray-700"
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide'>
      <table className='w-full text-sm text-gray-500'>
        <thead className='text-xs text-gray-700 text-left uppercase'>
          <tr>
            <th scope='col' className='px-6 py-4'>Blog title & comment</th>
            <th scope='col' className='px-6 py-4 max-sm:hidden'>Date</th>
            <th scope='col' className='px-6 py-4'>Action</th>
          </tr>
        </thead>
        <tbody>
          {comments.filter((comment) => {
            if(filter === "Approved") return comment.isApproved === true
            return comment.isApproved === false
          }).map((comment, index) => <CommentTableItem key={comment._id} comment={comment} index={index+1} fetchComments={fetchCommentsData} />)}
        </tbody>
      </table>
      </div>

    </div>
  );
}

export default Comments
