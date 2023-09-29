import React, { useState } from "react";
import "./App.css";
import { Col, Container, Row } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { people } from "./mocks/people";
import { Search } from "./components/Search";
import { searchFilter } from "./utils/searchFilter";
import { IPerson } from "./interfaces/IPerson";
import { Sorters } from "./components/Sorters";
import { IProperty } from "./interfaces/IProperty";
import { genericSort } from "./utils/genericSort";
import { PersonRender } from "./components/renderers/PersonRender";

function App() {
  const [query, setQuery] = useState<string>("");
  const [peopleSortProperty, setPeopleSortProperty] = useState<IProperty<IPerson>>({
    property: "firstName",
    isSpecialCase: false,
  });

  // const [peopleFiltersProperties, setPeopleFiltersProperties ] = useState<>

  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="bg-light border">
            <Container>
              <Row>
                <Col>
                  <h1 className="display-4">People</h1>
                  <Search onSearchQuery={setQuery} />
                  <Sorters
                    object={people[0]}
                    setProperty={(property) => {
                      setPeopleSortProperty(property);
                    }}
                  />

                  {people
                    .filter((person) => searchFilter(person, ["firstName", "lastName"], query, true))
                    .sort((a, b) => genericSort(a, b, peopleSortProperty))
                    // .filter((person)=>genericFilter(person, peopleFiltersProperties))
                    .map((person) => {
                      /* eslint-disable */
                      return <PersonRender {...person} />;
                    })}
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="bg-light border">.col</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
