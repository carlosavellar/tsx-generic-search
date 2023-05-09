import React from 'react';
import { useState } from "react"
import './App.css';
import { widgets } from './mock/widget'
import { Search } from './components/SearchForm'
import { genericFilter } from "./utils/genericFilter";
import IProperty from './interfaces/IProperty';
import { IWidget } from './interfaces/IWidget';
import { genericSort } from "./utils/genericSort"
import Sorters from "./components/Sorters"

function App() {
  const [query, setQuery] = useState<string>('');
  const [widgetSortProperty, setWidgetSortProperty] = useState<IProperty<IWidget>>({ property: 'title', isDescending: true })


  return <div className="App">
    <Search setProperty={setQuery} />
    <Sorters setProperty={(propertyType) => {
      setWidgetSortProperty(propertyType)
    }} object={widgets[0]} />

    {widgets
      .filter((widget) => genericFilter(widget, ['title', 'description'], query, true))
      .sort((a, b) => genericSort(a, b, widgetSortProperty))
      .map((widget, index) => {
        return <div key={index}>{widget.title}</div>
      })}
  </div>;

}
export default App; 