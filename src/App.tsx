import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { sortedByFoo } from "./generics/generics";
import { widgets } from "./mock/widget";
import { InputSearch } from "./components/InputSearch";
import { genericSearch } from "./utils/genericSearch";
import { IWidget } from "./interfaces/IWidget";
import { IProperty } from "./interfaces/IProperty";
import { genericSort } from "./utils/genericSort";
import { Sorters } from "./components/Sorters";

console.log(sortedByFoo);

function App() {
  const [query, setQuery] = useState<string>("");
  const [widgetSortProperties, setWidgetSortProperties] = useState<
    IProperty<IWidget>
  >({ property: "title", isAscending: true });

  return (
    <div className="App">
      <h1>Widgets</h1>
      <InputSearch setProperty={setQuery} />
      <Sorters
        object={widgets[0]}
        setPropertyType={(property) => {
          setWidgetSortProperties(property);
        }}
      />
      {widgets
        .filter((widget) =>
          genericSearch(widget, ["title", "description"], query, true)
        )
        .sort((a, b) => genericSort(a, b, widgetSortProperties))
        .map((widget) => {
          return <div>{widget.title}</div>;
        })}
    </div>
  );
}

export default App;
