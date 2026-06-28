import React, { useRef, useState } from 'react'
import { useAppContext } from '../context/AppContext';

const SearchBar = () => {
  
  const {setInput, input} = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async(e) => {
      e.preventDefault();

      try {
        setInput(inputRef.current.value);
      } catch (error) {
        console.log(error.message);
      }
  }

  const onClear = () => {
    setInput('');
    inputRef.current.value = '';
  }

  return (
    <div className="">
      <div className="flex items-center mb-5">
        <form
          onSubmit={onSubmitHandler}
          className="border inline-flex items-center  border-gray-300 max-w-lg mx-auto bg-white overflow-hidden rounded-md sm:min-w-md max-sm:scale-75 px-4 py-1"
        >
          <input
            ref={inputRef}
            required
            type="text"
            placeholder="Search blogs"
            className="outline-none text-slate-800 border-0 w-full "
          />
          <button className="bg-blue-600 px-8 py-2 rounded-md hover:scale-105 active:scale-95 transition-all duration-200 text-white">
            Search{" "}
          </button>
        </form>
      </div>
      <div className="text-center">
        {input && (
          <button onClick={onClear} className="border font-light text-xs py-1 px-3 rounded-xs shadow cursor-pointer">
            Clear Search
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar
