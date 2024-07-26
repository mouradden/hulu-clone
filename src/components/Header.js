import React from 'react';
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineBolt } from "react-icons/hi2";
import { HiOutlineBadgeCheck, HiOutlineCollection } from "react-icons/hi";
import { FaSearch, FaRegUser } from "react-icons/fa";

function Header() {
  return(
    <header className='flex flex-col sm:flex-row m-5 justify-between
    items-center h-auto'>
      <div className='flex flex-grow justify-evently max-w-2xl'>
        <HeaderItem title='HOME' Icon={GrHomeRounded}/>
        <HeaderItem title='TRENDING' Icon={HiOutlineBolt}/>
        <HeaderItem title='VERIFIED' Icon={HiOutlineBadgeCheck}/>
        <HeaderItem title='COLLECTIONS' Icon={HiOutlineCollection}/>
        <HeaderItem title='SEARCH' Icon={FaSearch}/>
        <HeaderItem title='ACCOUNT' Icon={FaRegUser}/>
      </div>
      <Image
        className='object-contain'
        src="https://links.papareact.com/ua6/"
        width={200}
        height={100}
      />

      
    </header>
  )
}

export default Header;