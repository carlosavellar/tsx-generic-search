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
enum EventType {
  Mouse,
  Keyboard,
}

function App() {
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
          <h3>Widgets</h3>
          {widgets
            .filter((property) => genericSearch(property, ['title', 'description'], query, true))
            .map((widget, index) => {
              return <WidgetRenderer key={index} {...widget} />;
            })}
        </>
      )}

      {showPeople && (
        <>
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
