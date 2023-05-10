import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import people from './mock/people';
import widgets from './mock/widgets';
import { genericSearch } from './utils/genericSearch';
import { InputSearch } from './components/InputSearch';
import { IPerson } from './interfaces/IPerson';
import { IProperty } from './interfaces/IProperty';
import { genericSort } from './utils/genericSort';
import { SortProperty } from './components/SortGeneric';
import { genericFilter } from './utils/genericFilter';
import { IWidget } from './interfaces/IWidget';

function App() {
  const [query, setQuery] = useState<string>('');
  const [peopleSortProperty, setPeopleSortProperty] = useState<IProperty<IPerson>>({
    property: 'firstName',
    isDescending: true,
  });
  const [widgetFilterProperty, seTwidgetFilterProperty] = useState<Array<keyof IWidget>>([]);

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
          .filter((widget) => genericSearch(widget, ['firstName', 'lastName'], query, true))
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
          .filter((widget) => genericSearch(widget, ['title', 'description'], query, true))
          .filter((widget) => genericFilter(widget, widgetFilterProperty))
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
