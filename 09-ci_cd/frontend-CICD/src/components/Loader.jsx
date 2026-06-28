import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full h-20 w-20 border-5 border-t-white border-gray-800'></div>
    </div>
  )
}

export default Loader
