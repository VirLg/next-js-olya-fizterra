import React from 'react';
import QuestionItem from './QuestionItem';

const Questions = () => {
  return (
    <div className="container bg-lime-100 pl-2 pr-2">
      <p className="titleFont">Popular Question :</p>
      <ul className="p-6">
        <QuestionItem />
      </ul>
    </div>
  );
};

export default Questions;
