import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { people } from "./mocks/people";
import { Search } from "./components/Search";
import { searchFilter } from "./utils/searchFilter";
import { IPerson } from "./interfaces/IPerson";
import { Sorters } from "./components/Sorters";
import { IProperty } from "./interfaces/IProperty";
import { genericSort } from "./utils/genericSort";

export function App() {
  const [query, setQuery] = useState<string>("");
  const [peopleSortProperty, setPeopleSortProperty] = useState<IProperty<IPerson>>({
    property: "firstName",
    isSpecialCase: false,
  });

  useEffect(() => {
    console.log(query);
  }, [query]);

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
                  <Sorters object={people[1]} setProperty={(property) => {
                    setPeopleSortProperty(property);
                  }} />
                  <ListGroup>
                    {people
                      .filter((person) => searchFilter(person, ["firstName", "lastName"], query)
                      )
                      .sort((a, b) => genericSort(a, b, peopleSortProperty))
                      .map((person) => {
                        return (
                          <ListGroupItem key={person.firstName}>
                            {person.firstName} {person.lastName}
                          </ListGroupItem>
                        );
                      })}
                  </ListGroup>
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
