import React, { useState } from "react";
import "./App.css";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { people } from "./mocks/people";
import { Search } from "./components/Search";
import { searchFilter } from "./utils/searchFilter";

function App() {
  const [query, setQuery] = useState<string>("");

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
                  <ListGroup>
                    {people
                      .filter((person) =>
                        searchFilter(
                          person,
                          ["firstName", "lastName"],
                          query,
                          false,
                        ),
                      )
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

export default App;
