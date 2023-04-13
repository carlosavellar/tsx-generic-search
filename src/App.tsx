import React, { useState } from 'react';
import './App.css';
import { widget } from './mock/widget';
import { genericSearch } from './utils/genericSearch';
import { SearchForm } from './components/SearchForm';
import { IWidget } from './interfaces/widgets';

function App() {
  const [query, setQuery] = useState<string>('');

  return (
    <div>
      <SearchForm setSearchQuery={setQuery} query={query} />
      <h3>Widget</h3>
      <ul>
        {widget
          .filter((property) => genericSearch(property, ['title', 'description'], query, true))
          .map((wid) => {
            return <li>{wid.title}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
