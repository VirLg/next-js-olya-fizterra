import React from 'react';
import Avatar from '../icons/avatar.svg';
import { data } from './feedbackContent';

const Feedback = () => {
  return data.map(el => {
    return (
      <div className="container w-[800px] bg-lemon-300 p-4">
        <div className="flex items-center">
          <img src={Avatar.src} alt="avatar" width={'40px'} />

          <p>Name user</p>
        </div>
        <h2>{el.title}</h2>
        <p>{el.content}</p>
      </div>
    );
  });
};

export default Feedback;
