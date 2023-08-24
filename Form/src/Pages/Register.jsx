import React from 'react'
import {PhotoIcon} from "@heroicons/react/24/outline"
const Register = ({changePage}) => {
  return (
    <div className='bg-white rounded-md p-5 w-1/5 '>
          <h1 className='text-center font-semibold text-xl text-gray-600'>Chat App using React & Firebase</h1>
          <p className='text-center text-sm underline text-gray-600 mt-2'>Register yourself</p>

          <form className='w-1/1 mt-5 flex flex-col gap-2'>
            <input className='w-full outline-0 border px-2 py-2 border-b-gray-700' type='text' placeholder='Display Name'/>
            <input className='w-full outline-0 border px-2 py-2 border-b-gray-700' type='email' placeholder='Email'/>
            <input className='w-full outline-0 border px-2 py-2 border-b-gray-700' type="password" placeholder='Password'/>
            <input type='file' className='hidden' id="file"/>
            <label htmlFor='file'>
              <div className='flex gap-2 items-center  cursor-pointer'>
                <PhotoIcon className='h-8 w-8 text-gray-700'/>
                <p className='text-gray-700'>Add an avatar</p>
              </div>
            </label>
            <button className='text-white  rounded py-2 px-2 bg-indigo-400'>Sign Up</button>
          </form>
          <p className='mt-5 text-gray-600 cursor-pointer' >Already have an account? <span className='underline ' onClick={()=>changePage("Login")}>Login</span></p>
    </div>
  )
}

export default Register