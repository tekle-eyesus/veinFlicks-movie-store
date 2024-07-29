import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div
      className='text-white flex items-center cursor-pointer gap-3 font-semibold text-[15px] hover:underline underline-offset-8
    mb-1'
    >
      <Icon />
      <h2 className=''>{name}</h2>
    </div>
  );
}

export default HeaderItem;
