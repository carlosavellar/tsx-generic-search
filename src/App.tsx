import React from 'react';
import logo from './logo.svg';
import {useState} from "react"
import './App.css';
import {  widgets  } from './mock/widget'
import { sortedByFoo , sortedByBar } from "./generics/generics";
import {Search} from './components/SearchForm'
import {genericFilter} from "./utils/genericFilter"

function App() {
  const [query, setQuery] = useState<string>('');

  return <div className="App">
    <Search setProperty={setQuery} />
    {widgets.filter((widget)=>genericFilter(widget, ['title', 'description'], query, true)).map((widget,index)=>{
      return <div key={index}>{widget.title}</div>
    })}
  </div>;
}

export default App;