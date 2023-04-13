import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { resultBar, resultFoo, resultFoo2 } from './generics/generics';
import { IWidget } from './interfaces/widgets';
import { IPeople } from './interfaces/people';
import { people } from './mocks/people';
import { widgets } from './mocks/widget';
import { genericSearch } from './utils/genericSearch';
import { InputForm } from './components/InputForm';
import { genericSort } from './utils/genericSort';

function App() {
  const [query, setQuery] = useState<string>('');

  return (
    <div className="App">
      <div>
        <InputForm setInputQuery={setQuery} />
      </div>

      <h3>Widgets</h3>

      <ul>
        {widgets
          .filter((property) => genericSearch(property, ['title', 'description'], query, true))
          .sort((a, b) => genericSort(a, b, 'title'))
          .map((widget, index) => {
            return <li key={index}>{widget.title}</li>;
          })}
      </ul>
      <h3>People</h3>
      <ul>
        {people
          .filter((property) => genericSearch(property, ['firstName', 'lastName'], query, true))
          .map((person, index) => {
            return <li key={index}>{person.firstName}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
