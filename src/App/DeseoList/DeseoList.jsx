import React from 'react';
import PropTypes from 'prop-types';
import DeseoItem from '../DeseoItem/DeseoItem';

const DeseoList = ({ deseos, cuandoCambiaDeseo }) => (
  <ul className="deseo-lista">
    {deseos.map(({ text, done }, i) => (
      <DeseoItem
        text={text}
        done={done}
        id={`deseo${i}`}
        key={text}
        onDoneChange={valor => {
          const actualeDeseos = [...deseos];
          actualeDeseos[i].done = valor;
          cuandoCambiaDeseo(actualeDeseos);
        }}
      />
    ))}
  </ul>
);

DeseoList.propTypes = {
  deseos: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      text: PropTypes.string,
    }),
  ),
  cuandoCambiaDeseo: PropTypes.func,
};

DeseoList.defaultProps = {
  deseos: [],
  cuandoCambiaDeseo: () => {},
};

export default DeseoList;
