import React, { MouseEventHandler, useState } from 'react';
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
import { PeopleRenderer } from './components/renderers/PeopleRender';
import { genericSort } from './utils/genericSort';
import { IProperty } from './interfaces/property';
import { Sorters } from './components/Sorters';

function App() {
  const [peopleRenderer, setPeopleRenderer] = useState<IProperty<IPeople>>({ property: 'firstName' });
  const [widgetRenderer, setWidgetRenderer] = useState<IProperty<IWidget>>({ property: 'title' });
  const [showPeople, setShowPeople] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const buttonText = showPeople ? 'Show widgets' : 'Show people';

  return (
    <div className="container">
      <button className="btn  btn-primary" onClick={() => setShowPeople(!showPeople)}>
        {buttonText}
      </button>
      <div>
        <InputForm setInputQuery={setQuery} />
      </div>

      {!showPeople && (
        <>
          <Sorters
            setProperty={(property) => {
              setWidgetRenderer({ property });
            }}
            object={widgets[0]}
          />
          <h3>Widgets</h3>
          {widgets
            .filter((property) => genericSearch(property, ['title', 'description'], query, true))
            .sort((a, b) => genericSort(a, b, widgetRenderer.property))
            .map((widget, index) => {
              return <WidgetRenderer key={index} {...widget} />;
            })}
        </>
      )}

      {showPeople && (
        <>
          <Sorters
            setProperty={(property) => {
              setPeopleRenderer({ property });
            }}
            object={people[0]}
          />
          <h3>People</h3>
          {people
            .filter((property) => genericSearch(property, ['firstName', 'lastName'], query, true))
            .map((person, index) => {
              return <PeopleRenderer key={index} {...person} />;
            })}
        </>
      )}
    </div>
  );
}

export default App;
