import React from 'react';
import Avatar from '../icons/avatar.svg';
import { data } from './feedbackContent';

const Feedback = () => {
  return data.map((el, idx) => {
    return (
      <div className="container w-[800px]  p-4" key={idx}>
        <div className="flex items-center">
          <img
            src={Avatar.src}
            alt="avatar"
            width={'60px'}
            className="rounded-full"
          />

          <p>Name user</p>
        </div>
        <h2>{el.title}</h2>
        <p>{el.content}</p>
      </div>
    );
  });
};

export default Feedback;
