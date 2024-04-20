import React, {useState} from 'react';
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube} from 'react-icons/fa';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-20 px-4'>
        <div>
            <h1>BEACHES.</h1>
        </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
    <div className='hidden md:flex'>
    <BiSearch size={20}/>
    <BsPerson size={20}/>
    </div>
    {/* Hamburger */}
    <div onClick={handleNav} className='md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />} 
    </div>
<div className='md:hidden'>
    <HiOutlineMenuAlt4 size={20} />
</div>

    {/* Mobile menu dropdown */}
<div className='absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'>
    <ul>
        <h1>BEACHSE.</h1>
        <l1 className='border-b'>Home</l1>
        <l1 className='border-b'>Destinations</l1>
        <l1 className='border-b'>Travel</l1>
        <l1 className='border-b'>View</l1>
        <l1 className='border-b'>Book</l1>
        <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
        </div>
        <div className='flex justify-between my-6'>
            <FaFacebooks className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
        </div>
    

        </ul>
</div>
</div>
  );
  
};

export default Navbar;