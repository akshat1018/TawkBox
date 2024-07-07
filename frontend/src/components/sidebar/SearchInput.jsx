import React from 'react'
import { TbMessage2Search } from "react-icons/tb";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2' >
        <input type="text" placeholder='Search..' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'><TbMessage2Search /></button>
    </form>
  )
}

export default SearchInput
