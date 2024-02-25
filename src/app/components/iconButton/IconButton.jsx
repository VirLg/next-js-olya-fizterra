'use client';
import React from 'react';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  const handle = () => alert('hello');

  return (
    <button onClick={handle} {...allyProps} style={{}}>
      <img src={children[0].src} />
    </button>
  );
};

// IconButton.defaultProps = {
//   onClick: () => alert('hello'),
//   children: null,
// };
