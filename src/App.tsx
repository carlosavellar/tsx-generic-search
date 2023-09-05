import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { people } from "./mocks/people";
import { genericSearch } from "./utils/genericSearch";
import { Search } from "./components/Search";
import { Sorters } from "./components/Sorters";
import { IPerson } from "./interfaces/IPerson";
import { IProperty } from "./interfaces/IProperty";
import { genericSort } from "./utils/genericSort";
import { genericFilter } from "./utils/generificFilter";
import { Filters } from "./components/Filters";

function App() {
  const [query, setQuery] = useState<string>("");
  const [peopleSortProperty, setPeopleSortProperty] = useState<
    IProperty<IPerson>
  >({
    property: "firstName",
    isTopDown: true,
  });
  const [peopleFilteredProperties, setPeopleFilteredProperties] = useState<
    Array<keyof IPerson>
  >([]);

  return (
    <div className="App">
      <h1>People</h1>
      <Search
        setProperty={(property) => {
          setQuery(property);
        }}
      />
      <Sorters
        object={people[0]}
        setProperty={(propertyType) => {
          setPeopleSortProperty(propertyType);
        }}
      />
      <Filters
        object={people[0]}
        properties={peopleFilteredProperties}
        onChangeFilter={(property) => {
          peopleFilteredProperties.includes(property)
            ? setPeopleFilteredProperties(
                peopleFilteredProperties.filter(
                  (peopleFilteredProperty: any) =>
                    peopleFilteredProperty !== property
                )
              )
            : setPeopleFilteredProperties([
                ...peopleFilteredProperties,
                property,
              ]);
        }}
      />
      <ul>
        {people
          .sort((a, b) => genericSort(a, b, peopleSortProperty))
          .filter((person) =>
            genericSearch(person, ["firstName", "lastName"], query, true)
          )
          .filter((person) => genericFilter(person, peopleFilteredProperties))
          .map((person) => {
            return (
              <li>
                {person.firstName} {person.lastName}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
