import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {
  const {axios, setToken, navigate} = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post('/api/admin/login', {email, password});
            if (data.success) {
              toast.success(data.message);
              setToken(data.token);
              localStorage.setItem("token", data.token);
              axios.defaults.headers.common["Authorization"] = data.token;
            } else {
              toast.error(data.message);
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    const resetPasswordHandler = () => {
        console.log("Reset password");
    }

  return (
    <div className="flex relative items-center justify-center h-screen">
      <div className='absolute top-6 left-6 sm:left-16'>
        <h1 onClick={() => navigate('/')} className='text-4xl font-bold text-slate-800 cursor-pointer'>Blog</h1>
      </div>
      <div className="w-full max-w-sm p-7 max-md:m-6 border border-blue-200 shadow-xl shadow-blue-300/40 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-blue-600">Admin </span>Login
            </h1>
            <p className="font-light text-gray-500">
              Enter your credentials to access the admin panel
            </p>
          </div>

          <form onSubmit={handleSubmit} className='w-full sm:max-w-md'>
            <input 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
              type="email"
              placeholder="Email id"
              required
              className="outline-0 border border-gray-400 w-full rounded-full px-4 py-2 text-slate-800 my-2"
            />
            <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
              type="password"
              placeholder="Password"
              required
              className="outline-0 border border-gray-400 w-full rounded-full px-4 py-2 text-slate-800 my-2"
            />
            <button type='submit' className='bg-blue-600 text-white text-center py-2 rounded-full w-full font-semibold hover:scale-102 active:scale-98 transition-all duration-150 my-2'>Login</button>
            <p onClick={resetPasswordHandler} className='text-cyan-700 underline text-sm font-medium cursor-pointer my-2 text-center'>Forgot password</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
