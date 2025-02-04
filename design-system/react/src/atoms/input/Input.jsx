import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({id, placeholder, onData, isValid, type, label }) => {

  function onInput (InputEvent) {
    console.log('Input.onData', InputEvent);
    if(typeof onData === 'function') {
      onData(InputEvent.target.value);
    }
    onData(InputEvent.target.value);
  }

  const message = isValid ? "Valore Corretto" : "Valore non Corretto"
  return (
    <>
      <input
      id={id}
      onInput={onInput}
      type={type}
      placeholder={placeholder}
    >
    </input>
    
    {label === undefined ? null : <label htmlFor={id}>{label}</label>}
    {isValid === undefined ? null : message}
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onData: PropTypes.func,
  isValid: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string
};

Input.defaultProps = {
  onData: undefined,
  type: 'text',
  placeholder: undefined,
  isValid: undefined,
  label: undefined
};
