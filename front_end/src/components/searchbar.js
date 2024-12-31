import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Searchbar(){
    const [keyword,Setkeyword]=useState("");
    const navigate=useNavigate();
    const searchHandler=()=>{
        navigate('/search?keyword='+keyword)
    }
    return <>    <div className="bg-primaryBlue relative p-2 grid w-[100%] justify-items-end">
              <input onChange={(e)=>(Setkeyword(e.target.value))} onBlur={searchHandler} placeholder="Search..." className=" w-80   inline-block  p-1 border-2 border-black rounded" />
              <button onClick={searchHandler} className='w-6 absolute top-3 right-5 text-black'><MagnifyingGlassIcon /></button>
              </div>
      </>
}