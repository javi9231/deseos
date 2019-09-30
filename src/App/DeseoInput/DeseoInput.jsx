import React from 'react';

const DeseoInput = () => (
  <fieldset className="deseo-input">
    <legend className="deseo-input__label">Nuevo deseo</legend>
    <input
      className="deseo-input__field"
      placeholder="Introduzca su deseo"
      type="text"
    />
  </fieldset>
);

export default DeseoInput;
