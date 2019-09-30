import React from 'react';
import DeseoInput from './DeseoInput';
import DeseoList from './DeseoList/DeseoList';

const deseos = [
  { text: 'Viajar a la luna', done: false },
  { text: 'Pagar gimnasio', done: true },
  { text: 'Ir al gimnasio', done: false },
];

const App = () => (
  <>
    <h1>Lista de deseos</h1>
    <DeseoInput />
    <DeseoList deseos={deseos} />
    <button type="button">Archivar realizados</button>
  </>
);

export default App;
