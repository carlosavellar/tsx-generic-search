import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { people, widgets } from "./mock";
import { Search } from "./components/Search";

import {
  sortByBar,
  fooBar,
  sortByAge,
  sortByFoo,
  sortedGenFoo,
} from "./generic/generics";
import { genericSearch } from "./utils/genericSearch";
import { IProperty, IWidget, IPerson } from "./interfaces";
import { genericSort } from "./utils/genericSort";
import GenericSort from "./components/GenericSort";
import { genericFilter } from "./utils/genericFilter";
import { Filters } from "./components/Filters";

console.clear();
console.log(sortByFoo(sortedGenFoo), "genFoo");

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [query, setQuery] = useState<string>("");
  const [widgetSortProperties, setWidgetSortProperties] = useState<
    IProperty<IWidget>
  >({ property: "title", isAscending: true });
  const [widgetFilterProperties, setWidgetFilterProperties] = useState<
    Array<keyof IWidget>
  >([]);
  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ flexGrow: 1, pt: 10, minWidth: "900px" }}>
          <Grid container spacing={2}>
            <Grid xs={6} md={6} xl={12}>
              <Item>
                <Typography variant={"h3"}>Widgets</Typography>
                <Search setPropertyQuery={setQuery} />
                <GenericSort
                  object={widgets[0]}
                  setPropertyType={(property) =>
                    setWidgetSortProperties(property)
                  }
                />
                <Filters
                  object={widgets[0]}
                  properties={widgetFilterProperties}
                  onChangeFilter={(property) => {
                    widgetFilterProperties.includes(property)
                      ? setWidgetFilterProperties([
                          ...widgetFilterProperties.splice(
                            widgetFilterProperties.indexOf(property)
                          ),
                        ])
                      : setWidgetFilterProperties([
                          ...widgetFilterProperties,
                          property,
                        ]);
                  }}
                />
                <List>
                  {widgets
                    .filter((widget) =>
                      genericSearch(widget, ["title"], query, true)
                    )
                    .sort((a, b) => genericSort(a, b, widgetSortProperties))
                    .filter((widget) =>
                      genericFilter(widget, widgetFilterProperties)
                    )
                    .map((widget) => {
                      return (
                        <ListItem key={widget.id}>{widget.title}</ListItem>
                      );
                    })}
                </List>
              </Item>
            </Grid>
            <Grid xs={6} md={6} xl={12}>
              <Item>
                {" "}
                <Typography variant={"h3"}>People</Typography>
                <List>
                  {people.map((person, index) => {
                    return (
                      <ListItem key={index}>
                        {person.firstName} {person.lastName}
                      </ListItem>
                    );
                  })}
                </List>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default App;
