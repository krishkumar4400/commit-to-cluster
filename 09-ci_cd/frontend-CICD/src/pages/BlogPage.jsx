import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets.js";
import Navbar from "../components/Navbar.jsx";
import moment from "moment";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import { Copy, ClipboardPaste } from "lucide-react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useAppContext } from "../context/AppContext.jsx";
import toast from "react-hot-toast";

const BlogPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [inputComment, setInputComment] = useState("");

  const [copiedUrl, setCopiedUrl] = useState("");

  const blogUrl = window.location.href;

  const { axios } = useAppContext();

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/get-blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.post("/api/blog/comments", { blogId: id });
      if(data.success) {
        setComments(data.comments)
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/blog/add-comment", {
        name,
        content: inputComment,
        blog: id,
      });

      if (data.success) {
        toast.success(data.message);
        setName("");
        setInputComment("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const copyBlogUrl = async (e) => {
    navigator.clipboard.writeText(blogUrl);
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, [data]);

  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
      <Navbar />
      <div className="text-center mt-22 text-gray-700">
        <p className="text-lg text-primary font-medium py-4">
          Published on {moment(data.createdAt).format("MMMM Do YYYY")}{" "}
        </p>
        <h1 className="font-semibold text-3xl sm:text-4xl text-gray-800 max-w-2xl mx-auto">
          {data.title}
        </h1>
        <h2 className="my-4 max-w-lg mx-auto truncate "> {data.subTitle} </h2>
        <p className="inline-block py-1.5 px-5 mb-7 border border-gray-400 rounded-full text-sm text-slate-800 bg-gray-200 font-medium">
          Michael Brown
        </p>
      </div>
      <div className="max-w-5xl mx-5 md:mx-auto my-10 mt-6">
        <img src={data.image} className="rounded-3xl mb-5" />
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="rich-text max-w-3xl mx-auto"
        ></div>
      </div>

      {/* comments section */}
      <div className="mt-15 mb-8 max-w-3xl mx-auto px-5">
        <p className="font-semibold text-xl text-slate-800 mb-4">
          {" "}
          {comments.length} {comments.length > 1 ? "Comments" : "Comment"}{" "}
        </p>
        <div className="flex flex-col gap-4 ">
          {comments.map((item, index) => (
            <div
              key={index}
              className="relative py-2 bg-gray-200/40 p-4 border shadow-xs shadow-amber-400 border-gray-200 rounded max-w-xl"
            >
              <div className="flex items-center gap-2 font-medium  mb-2">
                <img src={assets.user_icon} alt="" className="w-6" />
                <p className="text-slate-700 font-medium">{item.name}</p>
              </div>
              <p className="mx-2 text-gray-600 text-sm max-w-md font-medium ml-4">
                {item.content}
              </p>
              <div className="absolute bottom-2 right-4 flex items-center text-xs">
                {moment(item.createdAt).fromNow()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* comment box */}
      <div className="max-w-3xl mx-auto px-4">
        <p className="font-semibold mb-4">Add your comment</p>
        <form
          onSubmit={addComment}
          className="flex flex-col items-start gap-4 max-w-lg"
        >
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
            required
            className="w-full p-2 border border-gray-300 rounded outline-0"
          />
          <textarea
            placeholder="Comment"
            onChange={(e) => setInputComment(e.target.value)}
            value={inputComment}
            required
            className="w-full p-2 border border-gray-300 rounded outline-0 h-48"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer active:scale-98"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Share Buttons */}
      <div className="my-24 max-w-3xl mx-auto px-4">
        <p className="font-semibold my-4">Share this article on social media</p>

        <div className="flex items-center gap-4">
          <FacebookShareButton url={blogUrl} quote={data.title}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          <WhatsappShareButton url={blogUrl} title={data.title}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>

          <LinkedinShareButton url={blogUrl} quote={data.title}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>

          <TwitterShareButton url={blogUrl} title={data.title}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <p className="relative group ">
            <Copy
              size={20}
              onClick={copyBlogUrl}
              className="text-gray-600 hover:scale-105 active:scale-95 cursor-pointer transition-all duration-200 "
            />
            <p>
              <ul className="hidden group-hover:flex absolute top-0 left-5 z-10 flex-col justify-center">
                <li>Hello </li>
                <li>Hey</li>
                <li>WhatsApp</li>
              </ul>
            </p>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default BlogPage;
