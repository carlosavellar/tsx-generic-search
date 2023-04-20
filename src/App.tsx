import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { widgets } from './mocks/widgets';
import { people } from './mocks/people';

import * as generics from './generics/generic';
import { genericSearch } from './utils/genericSearch';
import { InputSearch } from './components/InputSearch';
import IProperty from './interfaces/IProperty';
import { IWidget } from './interfaces/IWidget';
import { genericSort } from './utils/genericSorter';
import { Sorters } from './components/Sorters';

function App() {
  const [query, setQuery] = useState<string>('');
  const [widgetProperty, setWidgetProperty] = useState<IProperty<IWidget>>({ property: 'title' });

  return (
    <div className="App">
      <h3>Widgets</h3>
      <InputSearch setInputSearch={setQuery} />
      <Sorters
        setProperty={(property) => {
          setWidgetProperty({ property });
        }}
        object={widgets[0]}
      />
      <ul>
        {widgets
          .filter((property) => genericSearch(property, ['title', 'description'], query, true))
          .sort((a, b) => genericSort(a, b, widgetProperty.property))
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
