import React from 'react';

const Child = ({ showModal, onButtonClick }) => {
  return (
    <div className="child">
      <h3>Child Component</h3>
      <button  className='btn' onClick={onButtonClick}>Show Modal</button>
      {showModal && <p className='display'>Model Content</p>}
      {showModal && <p className='answer'>This is the model content.</p>}
    </div>
  );
};

export default Child;