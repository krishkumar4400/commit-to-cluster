import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets.js";
import Quill from "quill";
import { useAppContext } from "../../context/AppContext.jsx";
import toast from "react-hot-toast";
import { parse } from "marked";

const AddBlogs = () => {
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("satrtup");
  const [isPublished, setIsPublished] = useState(false);

  const { axios, token } = useAppContext();
  const [isAdding, setIsAdding] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const generateContent = async () => {

    try {
      if (!title) {
        return toast.error("Please enter a title");
      }
      setLoading(true);
      const { data } = await axios.post("/api/admin/generate-content", {
        prompt: title,
      });
      if (data.success) {
        toast.success(data.message);
        quillRef.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsAdding(true);

      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished,
      };
      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);

      axios.defaults.headers.common["Authorization"] = `${token}`;
      const { data } = await axios.post("/api/blog/add-blog", formData);
      if (data.success) {
        toast.success(data.message);
        setImage(false);
        setTitle("");
        setSubTitle("");
        quillRef.current.root.innerHTML = "";
        setCategory("startup");
        setIsPublished(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setIsAdding(false);
    }

    try {
      console.log("Try Block");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // initiate quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1  bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white  relative w-full max-w-3xl p-4 ms:p-10 sm:m-10 shadow rounded">
        <p>upload thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="upload_area"
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>
        <p className="mt-4">Blog Title</p>
        <input
          type="text"
          required
          placeholder="Type here"
          className="w-full max-w-lg mt-2 p-2 px-4 border border-gray-300 outline-none rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="mt-4">Sub Title</p>
        <input
          type="text"
          required
          placeholder="Type here"
          className="w-full max-w-lg mt-2 p-2 px-4 border border-gray-300 outline-none rounded"
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
        />

        <p className="mt-4">Blog Description</p>
        <div className="">
          <div ref={editorRef}></div>
           {
            loading && <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/20 mt-2">
              <div className="w-10 h-10 rounded-full border-2 border-t-white animate-spin"></div>
            </div>
           }
          <button
            disabled={loading}
            className={`absolute bottom-1 right-2 ml-2 my-4 mx-4 text-xs text-white ${
              loading ? "bg-black/40" : "bg-black/70"
            } px-4 py-1.5 rounded hover:underline cursor-pointer`}
            onClick={generateContent}
          >
            {loading ? "Generating..." : "Generate with AI"}
          </button>
        </div>

        <p className="mt-4">Blog Category</p>
        <select
          required
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          name="category"
          className="mt-2 px-3 py-2 border text-gray-500 outline-0 rounded border-gray-300 "
        >
          <option value="">Select category</option>
          {blogCategories.map((category, index) => {
            return (
              <option value={category} key={index}>
                {category}
              </option>
            );
          })}
        </select>

        <div className="flex gap-2 mt-4 items-center">
          <p>Publish now</p>
          <input
            onChange={(e) => setIsPublished(e.target.checked)}
            type="checkbox"
            checked={isPublished}
            className="scale-125 cursor-pointer"
          />
        </div>

        <button
          disabled={isAdding}
          type="submit"
          className={`mt-8 w-40 h-10 text-white rounded duration-150 cursor-pointer text-sm text-center ${
            isAdding ? "bg-blue-400/90" : "bg-blue-600 active:scale-95"
          } `}
        >
          {isAdding ? "Adding..." : "Add Blog"}
        </button>
      </div>
    </form>
  );
};

export default AddBlogs;
