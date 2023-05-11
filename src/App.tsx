import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import people from './mock/people';
import widgets from './mock/widgets';
import { genericSearch } from './utils/genericSearch';
import { InputSearch } from './components/InputSearch';
import { IPerson } from './interfaces/IPerson';
import { ISorter } from './interfaces/ISorter';
import { genericSort } from './utils/genericSort';
import { SortProperty } from './components/SortGeneric';
import { genericFilter } from './utils/genericFilter';
import { IWidget } from './interfaces/IWidget';
import { Filters } from './components/Filters';
import { IFilter } from './interfaces/IFilter';

function App() {
  const [query, setQuery] = useState<string>('');
  const [peopleSortProperty, setPeopleSortProperty] = useState<ISorter<IPerson>>({
    property: 'firstName',
    isDescending: true,
  });
  const [widgetSortProperty, setWidgetSortProperty] = useState<ISorter<IWidget>>({
    property: 'title',
    isDescending: true,
  });
  const [widgetFilterProperties, setWidgetFilterProperty] = useState<Array<IFilter<IWidget>>>([]);
  const [peopleFilterProperties, setPeopleFilterProperty] = useState<Array<IFilter<IPerson>>>([]);

  return (
    <div className="App">
      <>
        <InputSearch setPropertyType={setQuery} />
        <h3>People</h3>
        <Filters
          properties={peopleFilterProperties}
          object={people[0]}
          onChangeFilter={(property) => {
            const propertyMatch = peopleFilterProperties.some(
              (peopleFilterProperty) => peopleFilterProperty.property === property.property
            );
            const fullMatch = peopleFilterProperties.some(
              (peopleFilterProperty) =>
                peopleFilterProperty.property === property.property &&
                peopleFilterProperty.isTruthySelected === property.isTruthySelected
            );
            if (fullMatch) {
              setPeopleFilterProperty(
                peopleFilterProperties.filter(
                  (peopleFilterProperty) => peopleFilterProperty.property !== property.property
                )
              );
            } else if (propertyMatch) {
              setPeopleFilterProperty([
                ...peopleFilterProperties.filter(
                  (peopleFilterProperty) => peopleFilterProperty.property !== property.property
                ),
                property,
              ]);
            } else {
              setPeopleFilterProperty([...peopleFilterProperties, property]);
            }
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
          .map((person, index) => {
            return (
              <div key={index}>
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
            const propertyMatch = widgetFilterProperties.some(
              (widgetFilterProperty) => widgetFilterProperty.property === property.property
            );
            const fullMatch = widgetFilterProperties.some(
              (widgetFilterProperty) =>
                widgetFilterProperty.property === property.property &&
                widgetFilterProperty.isTruthySelected === property.isTruthySelected
            );
            if (fullMatch) {
              setWidgetFilterProperty(
                widgetFilterProperties.filter(
                  (widgetFilterProperty) => widgetFilterProperty.property !== property.property
                )
              );
            } else if (propertyMatch) {
              setWidgetFilterProperty([
                ...widgetFilterProperties.filter(
                  (widgetFilterProperty) => widgetFilterProperty.property !== property.property
                ),
                property,
              ]);
            } else {
              setWidgetFilterProperty([...widgetFilterProperties, property]);
            }
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
          .map((widget, index) => {
            return (
              <div key={index}>
                {widget.title} {widget.description}
              </div>
            );
          })}
      </>
    </div>
  );
}

export default App;
