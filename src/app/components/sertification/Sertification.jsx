import React from 'react';
import diplom from '../images/diplom.jpg';
import diplom_1 from '../images/diplom-1.jpg';

const Sertification = () => {
  return (
    <div className="container flex flex-wrap bg-lime-100 gap-4">
      <div className="w-[600px]">
        <img src={diplom.src} alt="diplom_image" width={'100%'} />
      </div>
      <div className="w-[400px]">
        <img src={diplom_1.src} alt="diplom_image" width={'100%'} />
      </div>
      <div className="w-[400px]">
        <img src={diplom_1.src} alt="diplom_image" width={'100%'} />
      </div>
      <div className="w-[600px]">
        <img src={diplom.src} alt="diplom_image" width={'100%'} />
      </div>
      <div className="w-[400px] ">
        <img src={diplom_1.src} alt="diplom_image" width={'100%'} />
      </div>
    </div>
  );
};

export default Sertification;
