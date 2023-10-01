import React, { useState } from "react";
import "./App.css";
import { Col, Container, Row } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { people } from "./mocks/people";
import { Search } from "./components/Search";
import { searchFilter } from "./utils/searchFilter";
import { IPerson } from "./interfaces/IPerson";
import { Sorters } from "./components/Sorters";
import { ISorter } from "./interfaces/ISorter";
import { genericSort } from "./utils/genericSort";
import { PersonRender } from "./components/renderers/PersonRender";
import { genericFilter } from "./utils/genericFilter";
import { Filters } from "./components/Filters";
import { IFilter } from "./interfaces/IFilter";

function App() {
  const [query, setQuery] = useState<string>("");
  const [peopleSortProperty, setPeopleSortProperty] = useState<ISorter<IPerson>>({
    property: "firstName",
    isSpecialCase: false,
  });
  const [showPeople, setShowPeople] = useState<boolean>(false);

  const [peopleFiltersProperties, setPeopleFiltersProperties] = useState<Array<IFilter<IPerson>>>([]);

  const buttonText: string = showPeople ? "Show widgets" : "Show people";

  return (
    <div className="App">
      <Container>
        <Row>
          <button type="button" className="btn btn-primary" onClick={() => setShowPeople(!showPeople)}>
            {buttonText}
          </button>
          {!showPeople && (
            <Col className="bg-light border">
              <Container>
                <Row>
                  <Col>
                    <h1 className="display-4">People</h1>
                    <Search onSearchQuery={setQuery} />
                    <Sorters
                      dataSorters={people}
                      setProperty={(property) => {
                        setPeopleSortProperty(property);
                      }}
                    >
                      {(person) => <PersonRender {...person} />}
                    </Sorters>
                    <Filters
                      object={people[0]}
                      properties={peopleFiltersProperties}
                      onChangeFilter={(property) => {
                        const propertyMatch = peopleFiltersProperties.some((personFilterProperty) => {
                          return personFilterProperty.property === property.property;
                        });
                        const fullMatch = peopleFiltersProperties.some((personFilterProperty) => {
                          return (
                            personFilterProperty.property === property.property &&
                            personFilterProperty.isTruthySelected === property.isTruthySelected
                          );
                        });
                        if (fullMatch) {
                          setPeopleFiltersProperties([
                            ...peopleFiltersProperties.filter(
                              (peoplefilterProperty) => peoplefilterProperty.property !== property.property
                            ),
                            property,
                          ]);
                        } else if (propertyMatch) {
                          setPeopleFiltersProperties([
                            ...peopleFiltersProperties.filter(
                              (peoplefilterProperty) => peoplefilterProperty.property !== property.property
                            ),
                            property,
                          ]);
                        } else {
                          setPeopleFiltersProperties([...peopleFiltersProperties, property]);
                        }
                      }}
                    />
                    {people
                      .filter((person) => searchFilter(person, ["firstName", "lastName"], query, true))
                      .sort((a, b) => genericSort(a, b, peopleSortProperty))
                      .filter((person) => genericFilter(person, peopleFiltersProperties))
                      .map((person, index) => {
                        /* eslint-disable */
                        return <PersonRender key={index} {...person} />;
                      })}
                  </Col>
                </Row>
              </Container>
            </Col>
          )}
          <Col className="bg-light border">.col</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
