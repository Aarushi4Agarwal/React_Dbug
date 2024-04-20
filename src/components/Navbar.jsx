import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube} from 'react-icons'

const Navbar = () => {
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
<div className='md:hidden'>
    <HiOutlineMenuAlt4 size={20} />
</div>
<div>
    <ul>
        <h1>BEACHSE.</h1>
        <l1>Home</l1>
        <l1>Destinations</l1>
        <l1>Travel</l1>
        <l1>View</l1>
        <l1>Book</l1>
        <div>
            <button>Search</button>
            <button>Accouny</button>
        </div>
        <div>
            <FaFacebooks className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
        </div>

    </ul>
</div>

export default Navbar