import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = 'https://blog-app-backend-xked.onrender.com';


const AppContext = createContext();

export const AppProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [input, setInput] = useState("");

    const fetchBlogs = async () => {
        try {
            const {data} = await axios.get("/api/blog/get-all-blogs");
            if(data.success) {
                setBlogs(data.blogs);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    const value = {
      axios,
      navigate,
      token,
      setToken,
      blogs,
      setBlogs,
      input,
      setInput,
    };

    useEffect(() => {
        fetchBlogs();
        const token = localStorage.getItem('token');
        if(token) {
            setToken(token);
            axios.defaults.headers.common['Authorization'] = `${token}`;
        }
    }, [blogs, setBlogs])

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
       return useContext(AppContext);
};