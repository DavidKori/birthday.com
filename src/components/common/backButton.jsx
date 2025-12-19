import React from 'react';
import './backButton.css';
import { MdArrowBack } from 'react-icons/md';

const backButton = ({action, props}) => {
  return (
    <div>
      <button className="backButton" onClick={action}><MdArrowBack size={24} />{props}</button>
    </div>
  )
};

export default backButton;

