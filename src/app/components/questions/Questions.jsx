import React from 'react';
import QuestionItem from './QuestionItem';

const Questions = () => {
  return (
    <div className="container bg-lime-100">
      <p className="titleFont">Popular Question :</p>
      <ul>
        <QuestionItem />
      </ul>
    </div>
  );
};

export default Questions;
