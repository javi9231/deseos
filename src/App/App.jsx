import React, { useState } from 'react';
import DeseoInput from './DeseoInput';
import DeseoList from './DeseoList/DeseoList';

const initialDeseos = [
  { text: 'Viajar a la luna', done: false },
  { text: 'Pagar gimnasio', done: true },
  { text: 'Ir al gimnasio', done: false },
];

const App = () => {
  const [deseos, setDeseos] = useState(initialDeseos);
  return (
    <>
      <h1>Lista de deseos</h1>
      <DeseoInput />
      <DeseoList deseos={deseos} cuandoCambiaDeseo={setDeseos} />
      <button type="button">Archivar realizados</button>
    </>
  );
};

export default App;
