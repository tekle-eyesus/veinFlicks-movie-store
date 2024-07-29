import React, { useState } from "react";
import logo from "./../assets/images/header-logo.png";
import userImage from "./../assets/images/user-image.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WITCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];
  return (
    <div className='flex items-center gap-7 justify-between p-5  relative'>
      <div className='flex gap-8'>
        <img
          src={logo}
          className='w-[50px] md:w-[90px] h-[60px] object-cover mt-[-10px]'
        />
        <div className='hidden md:flex gap-8 ml-10 font-sans'>
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className='flex md:hidden gap-5 ml-2'>
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
          <div
            className='mt-4 md:hidden mt-1 '
            onClick={() => setToggle(!toggle)}
          >
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {/* the toggle is to make the dropdown box to display */}
            {toggle ? (
              <div
                className='absolute text-sm mt-[-36px] ml-6 mt- bg-slate-950 
            border-[1px] p-1 border-gray-700 px-2 py-2 rounded-2xl'
              >
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img src={userImage} className='w-12 rounded-full' />
    </div>
  );
}

export default Header;
