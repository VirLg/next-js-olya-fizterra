import React from 'react';
import arr from '../galleryData';
const SingleItem = ({ idx }) => {
  console.log('idx', idx);

  return (
    <div className="container bg-lime-100 h-[80px]">Gallery item {idx}</div>
  );
};
export default SingleItem;
