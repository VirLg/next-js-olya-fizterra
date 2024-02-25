import React from 'react';
import GalleryItem from './galleryItem';
const Gallery = () => {
  return (
    <div className="container ">
      <ul className=" grid grid-cols-3 gap-4">
        <GalleryItem />
      </ul>
    </div>
  );
};

export default Gallery;
