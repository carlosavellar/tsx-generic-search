import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import people from './mock/people';
import widgets from './mock/widgets';
import { genericFilter } from './utils/genericFilter';
import { InputSearch } from './components/InputSearch';
import { IPerson } from './interfaces/IPerson';
import { IProperty } from './interfaces/IProperty';
import { genericSort } from './utils/genericSort';
import { SortProperty } from './components/SortGeneric';

function App() {
  const [query, setQuery] = useState<string>('');
  const [peopleSortProperty, setPeopleSortProperty] = useState<IProperty<IPerson>>({
    property: 'firstName',
    isDescending: true,
  });

  return (
    <div className="App">
      <>
        <InputSearch setPropertyType={setQuery} />
        <h3>People</h3>
        <SortProperty
          setPropertyType={(propertyType) => {
            setPeopleSortProperty(propertyType);
          }}
          object={people[0]}
        />
        {people
          .filter((widget) => genericFilter(widget, ['firstName', 'lastName'], query, true))
          .sort((a, b) => genericSort(a, b, peopleSortProperty))
          .map((person) => {
            return (
              <div>
                {person.firstName} {person.lastName}
              </div>
            );
          })}
      </>
      <>
        <h3>Widget</h3>
        {widgets
          .filter((widget) => genericFilter(widget, ['title', 'description'], query, true))
          .map((widget) => {
            return (
              <div>
                {widget.title} {widget.description}
              </div>
            );
          })}
      </>
    </div>
  );
}

export default App;
