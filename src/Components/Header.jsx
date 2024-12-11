import React, { useState } from 'react';
import d from '../assets/Images/d.png';
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle, setToggle] = useState(false); 

  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'WATCH LIST', icon: HiPlus },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIES', icon: HiTv },
  ];

  return (
    <div className="fixed top-6 left-0 w-full flex items-center justify-between px-8 ">
      {/* Logo and Menu */}
      <div className="flex items-center gap-8">
        <img
          src={d}
          alt=""
          className="w-[80px] md:w-[115px] object-cover"
        />

        <div className="hidden md:flex gap-6">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-6">  
          {menu.map((item,index) =>index<3&& (
            <HeaderItem key={item.name} name={''} Icon={item.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-6" onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />      
           {toggle? <div className='absolute mt-8 bg-[121212]
             border-[1px] border-gray-700 p-3 px-5 py-3'> 
            {menu.map((item,index) =>index>2&& (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
              </div>:null}
        </div>

      </div>

      {/* Profile Picture */}
      <img
        src="https://static.printler.com/cache/1/c/6/5/0/1/1c65019fcc732febff27a50dda5e2c61a2c5478a.jpg"
        alt="profile"
        className="w-[40px] h-[40px] rounded-full "
      />
    </div>
  );
}


export default Header;
