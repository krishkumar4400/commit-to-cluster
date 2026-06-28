import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {

  const {title, image, description, category, _id} = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/blog/" + _id)}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-103 active:scale-97 hover:shadow-blue-500/50 duration-300 cursor-pointer"
    >
      <img src={image} alt="" className="aspect-video" />
      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-blue-500/20 rounded-full text-blue-600 text-xs">
        {" "}
        {category}{" "}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        <p
          dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }}
          className="mb-4 text-xs text-gray-600"
        ></p>
      </div>
    </div>
  );
}

export default BlogCard
