import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const navigate = useNavigate();

  const {axios, token} = useAppContext();


  return (
    <div className="flex items-center justify-between px-5 sm:px-12 py-6">
      <h1
        onClick={() => navigate("/")}
        className="text-4xl font-bold text-slate-800 cursor-pointer"
      >
        Blog
      </h1>
      <button
        onClick={() => navigate("/admin")}
        className="bg-blue-600 flex items-center gap-2 text-sm text-white px-8 py-2.5 rounded-full border-none cursor-pointer"
      >
        {token ? "Dashboard" : "Login"}{" "}
        <img src={assets.arrow} className="w-4" alt="arrow" />{" "}
      </button>
    </div>
  );
}

export default Navbar
