import React from 'react';
import logo from './logo.svg';
import './App.css';

import * as generics from './generics/generic';

console.log(generics.sortByBar(generics.fooBar));
console.log(generics.sortByFoo(generics.fooBar));
console.log(generics.genericSort(generics.fooBar, 'bar'));

function App() {
  return <div className="App">w..</div>;
}

export default App;
