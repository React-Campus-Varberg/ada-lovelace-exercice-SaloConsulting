import React from 'react';
import ReactDOM from 'react-dom';
import About from '../component/About';
import Image from '../component/Image';

function App() {
  return (
    <div>
      <header>
        <h1>Uppgift 1 från SALO/Peter! Har git push problem.</h1>
        <p>Mitt namn är Peter Salomonsson och pushar upp via SALO Consulting då jag har flera ssh nycklar på min dator men har dessvärre inte tid till att bråka med eventuella problem. =)</p>
        <Image />
        <About />
      </header>
    </div>
  );
}

export default App;
