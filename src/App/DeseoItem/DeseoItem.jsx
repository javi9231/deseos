import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const DeseoItem = ({ text, done, id, onDoneChange }) => (
  <li
    className={classNames('deseo-lista__item', {
      'deseo-lista__item--done': done,
    })}
    key={text}
  >
    <label className="deseo-lista-label" htmlFor={`deseo${id}`}>
      <input
        className="deseo-lista__field"
        type="checkbox"
        id={`deseo${id}`}
        checked={done}
        onChange={e => onDoneChange(e.target.checked)}
      />
      {text}
    </label>
  </li>
);

DeseoItem.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};

DeseoItem.defaultProps = {
  text: 'no encontrado',
  done: false,
  id: '',
  onDoneChange: () => {},
};

export default DeseoItem;
