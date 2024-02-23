'use client';
import React, { useState } from 'react';
import { arr } from './questionsContent';

const QuestionItem = () => {
  const [togle, setTogle] = useState(null);
  const handleClick = idx => {
    if (togle !== idx) {
      setTogle(idx);
    } else {
      setTogle(null);
    }
  };
  return arr.map((el, idx) => {
    if (idx !== togle) {
      return (
        <li onClick={() => handleClick(idx)} key={idx}>
          <div>
            <p>{el.title}</p>
          </div>
        </li>
      );
    } else {
      return (
        <li onClick={() => handleClick(idx)} key={idx}>
          <div>
            <p className="titleFont">{el.title}</p>
          </div>

          <div>
            <p className="titleFont">{el.context}</p>
          </div>
        </li>
      );
    }
  });
};

export default QuestionItem;
