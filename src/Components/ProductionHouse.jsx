import React from "react";
import banner1 from "./../assets/images/banner1.png";
import image1 from "./../assets/images/insight.png";
import image2 from "./../assets/images/veinDev.png";
import image3 from "./../assets/images/veinNet.png";
import image4 from "./../assets/images/veinSky.png";
function ProductionHouse() {
  const servicesList = [
    { id: 1, image: banner1 },
    { id: 2, image: image1 },
    { id: 3, image: image2 },
    { id: 4, image: image3 },
    { id: 5, image: image4 },
  ];
  return (
    <div className='p-2 flex gap-5 justify-center mt-1'>
      {servicesList.map((items) => (
        <div
          className='hidden md:block border-[1px] border-red-700 w-[200px] 
        h-32 rounded-lg mb-5 hover:scale-110 
        transition-all ease-in-out duration-300 cursor-pointer shadow-xl shadow-black'
        >
          <img
            src={items.image}
            className='w-[200px] h-full object-cover rounded-lg'
          />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
