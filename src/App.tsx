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
import { Filters } from './components/Filters';

function App() {
  const [query, setQuery] = useState<string>('');
  const [peopleSortProperty, setPeopleSortProperty] = useState<IProperty<IPerson>>({
    property: 'firstName',
    isDescending: true,
  });
  const [widgetSortProperty, setWidgetSortProperty] = useState<IProperty<IWidget>>({
    property: 'title',
    isDescending: true,
  });
  const [widgetFilterProperties, setWidgetFilterProperty] = useState<Array<keyof IWidget>>([]);
  const [peopleFilterProperties, setPeopleFilterProperty] = useState<Array<keyof IPerson>>([]);

  return (
    <div className="App">
      <>
        <InputSearch setPropertyType={setQuery} />
        <h3>People</h3>
        <Filters
          properties={peopleFilterProperties}
          object={people[0]}
          onChangeFilter={(property) => {
            peopleFilterProperties.includes(property)
              ? setPeopleFilterProperty(
                  peopleFilterProperties.filter((peopleFilterProperty) => peopleFilterProperty !== property)
                )
              : setPeopleFilterProperty([...peopleFilterProperties, property]);
          }}
        />
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
        <Filters
          properties={widgetFilterProperties}
          object={widgets[0]}
          onChangeFilter={(property) => {
            widgetFilterProperties.includes(property)
              ? setWidgetFilterProperty(
                  widgetFilterProperties.filter((widgetFilterProperty) => widgetFilterProperty !== property)
                )
              : setWidgetFilterProperty([...widgetFilterProperties, property]);
          }}
        />
        <SortProperty
          setPropertyType={(propertyType) => {
            setWidgetSortProperty(propertyType);
          }}
          object={widgets[0]}
        />
        {widgets
          .filter((widget) => genericSearch(widget, ['title', 'description'], query, true))
          .sort((a, b) => genericSort(a, b, widgetSortProperty))
          .filter((widget) => genericFilter(widget, widgetFilterProperties))
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
