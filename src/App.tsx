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
import IProperty from './interfaces/property';
import { Sorters } from './components/Sorters';

function App() {
  const [query, setQuery] = useState<string>('');
  const [widgetSortProperty, setWidgetSortProperty] = useState<IProperty<IWidget>>({ property: 'title' });
  const [peopleProperty, setPeopleProperty] = useState<IProperty<IPeople>>({ property: 'firstName' });

  return (
    <div className="App">
      <div>
        <InputForm setInputQuery={setQuery} />
      </div>
      <h3>Widgets</h3>
      <Sorters
        setProperty={(property) => {
          setWidgetSortProperty({ property });
        }}
        object={widgets[0]}
      />
      <ul>
        {widgets
          .filter((property) => genericSearch(property, ['title', 'description'], query, true))
          .sort((a, b) => genericSort(a, b, widgetSortProperty.property))
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
