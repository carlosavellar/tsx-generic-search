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
import { WidgetRenderer } from './components/renderers/WidgetRenderes';

function App() {
  const [query, setQuery] = useState<string>('');

  return (
    <div className="container">
      <div>
        <InputForm setInputQuery={setQuery} />
      </div>

      <h3>Widgets</h3>

      <div>
        {widgets
          .filter((property) => genericSearch(property, ['title', 'description'], query, true))
          .map((widget, index) => {
            return <WidgetRenderer key={index} {...widget} />;
          })}
      </div>
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
