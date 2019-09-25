import React from 'react';
import classNames from 'classnames';

const deseos = [
  { text: 'Viajar a la luna', done: false },
  { text: 'Pagar gimnasio', done: true },
  { text: 'Ir al gimnasio', done: false },
];

const App = () => (
  <>
    <h1>Lista de deseos</h1>
    <fieldset className="deseo-input">
      <legend className="deseo-input__label">Nuevo deseo</legend>
      <input
        className="deseo-input__field"
        placeholder="Introduzca su deseo"
        type="text"
      />
    </fieldset>
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
    <button type="button">Archivar realizados</button>
  </>
);

export default App;
