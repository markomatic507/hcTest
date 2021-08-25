import React from "react";

/**
 * Function that displays the spinner
 * @returns spinner html
 */
const Spinner = () => {
  return (
    <div className='mt-5 d-flex justify-content-center'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
