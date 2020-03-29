import React, { useState } from 'react';

import Header from './Header';

function App() {
  const [Counter, setCounter] = useState(0);

  function increment(){
    setCounter(Counter + 1);
    // console.log({counter});
  }

  return (
    <div>
    <Header>Contador: {Counter}</Header>
    <button onClick={increment}>Incremetar</button>
    </div>
  );
}

export default App;
