import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DeseoList = ({ deseos }) => (
  <ul className="deseo-lista">
    {deseos.map(({ text, done }, i) => (
      <li
        className={classNames('deseo-lista__item', {
          'deseo-lista__item--done': done,
        })}
        key={text}
      >
        <label className="deseo-lista-label" htmlFor={`deseo${i}`}>
          <input
            className="deseo-lista__field"
            type="checkbox"
            name=""
            id={`deseo${i}`}
            checked={done}
          />
          {text}
        </label>
      </li>
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
};

DeseoList.defaultProps = {
  deseos: [],
};

export default DeseoList;
