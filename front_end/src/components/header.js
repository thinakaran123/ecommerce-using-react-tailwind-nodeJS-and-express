import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import {Link} from 'react-router-dom';
import Cartdetails from './cartdetails';

export default function Header({cartitems}){
const [toggle,setToggle]=useState(false);
    return <><nav className="bg-primaryBlue">
        
        <button onClick={()=>{setToggle(!toggle)}} className='md:hidden'><Bars3Icon className='text-white w-14'/></button>
        {toggle &&   <ul className="text-white grid place-items-start pl-2 md:flex gap-4 text-xl md:justify-end pt-3 pb-3 pr-2 ">
            <Link to="/"  className="no-underline text-white hover:no-underline cursor-pointer">Home</Link>
            <Link to="/products"  className="no-underline text-white hover:no-underline cursor-pointer">Shop Now</Link>
            <Link to="/"  className="no-underline text-white hover:no-underline cursor-pointer">Contact</Link>
               </ul>}
               <Link className='md:hidden no-underline md:no-underline' to={"/cart"}><Cartdetails cartitems={cartitems}/></Link>  
        <ul className="hidden text-white  place-items-start pl-2 md:grid md:grid-flow-col gap-4 text-xl md:justify-end pt-3 pb-3 pr-2 ">
       
        <Link to="/"  className="no-underline text-white hover:no-underline cursor-pointer">Home</Link>
            <Link to="/products"  className="no-underline text-white hover:no-underline cursor-pointer">Shop Now</Link>
            <Link to="/"  className="no-underline text-white hover:no-underline cursor-pointer">Contact</Link>
<li  className='no-underline hover:no-underline' ><Link className='no-underline hover:no-underline' to={"/cart"}><Cartdetails cartitems={cartitems}/></Link></li>
        </ul>

    </nav></>
}