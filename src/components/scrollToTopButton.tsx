/* eslint-disable no-use-before-define */
import React from 'react';
import { BsArrowUp } from 'react-icons/bs';

const ScrollToTopButton = () => {
  return (
    <button
      type="button"
      className="scroll-top"
    >
      <BsArrowUp
        className="cursor-pointer"
        onClick={() => {
          const body = document.querySelector('#root');
          body?.scrollIntoView({
            behavior: 'smooth',
          });
        }}
      />
    </button>
  );
};

export default ScrollToTopButton;
