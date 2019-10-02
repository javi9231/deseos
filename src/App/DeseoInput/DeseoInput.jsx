import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DeseoInput = ({ siNuevoDeseo }) => {
  const [nuevoDeseoTexto, setNuevoDeseoTexto] = useState('');
  return (
    <fieldset className="deseo-input">
      <legend className="deseo-input__label">Nuevo deseo</legend>
      <input
        className="deseo-input__field"
        placeholder="Introduzca su deseo"
        type="text"
        value={nuevoDeseoTexto}
        onChange={e => setNuevoDeseoTexto(e.target.value)}
        onKeyUp={e => {
          if (e.key === 'Enter' && nuevoDeseoTexto.length) {
            siNuevoDeseo({ done: false, text: nuevoDeseoTexto });
            setNuevoDeseoTexto('');
          }
        }}
      />
    </fieldset>
  );
};

DeseoInput.propTypes = {
  siNuevoDeseo: PropTypes.func,
};

DeseoInput.defaultProps = {
  siNuevoDeseo: () => {},
};
export default DeseoInput;
