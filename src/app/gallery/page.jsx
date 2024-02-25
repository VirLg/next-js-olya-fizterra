import React from 'react';
import GalleryItem from './galleryItem';
const Gallery = () => {
  return (
    <div className="container ">
      <ul className=" grid gap-4  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  bg-lime-100">
        <GalleryItem />
      </ul>
    </div>
  );
};

export default Gallery;
