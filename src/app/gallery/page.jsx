import React from 'react';
import GalleryItem from './galleryItem';
const Gallery = () => {
  return (
    <div className="container grid grid-cols-3 gap-4">
      <GalleryItem />
    </div>
  );
};

export default Gallery;
