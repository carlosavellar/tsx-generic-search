import React, { useState } from "react";
import "./App.css";
import { WidgetsComponent } from "./components/content/Widgets";
import { widgets } from "./mocks/widgets";
import List from "@mui/material/List";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { SearchInput } from "./components/SearchInput";
import { genericSort } from "./utils/genericSort";
import { IWidget } from "./interfaces/IWidget";
import { IProperty } from "./interfaces/IProperty";
import { SelectProperty } from "./components/SelectProperty";
import { genericSearch } from "./utils/genericSearch";
import { genericFilter } from "./utils/genericFilter";
import { Filters } from "./components/Filters";

function App() {
  const [query, setQuery] = useState<string>("");
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    IProperty<IWidget>
  >({ property: "title" });
  const [widgetFilterProperties, setWidgetFilterProperties] = useState<
    Array<keyof IWidget>
  >([]);

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SearchInput setInputQuery={setQuery} />
        </Grid>
        <Grid item xs={4}>
          <SelectProperty
            object={widgets[0]}
            setPropertyType={(property) => {
              setWidgetSortProperty({ property });
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Filters
            object={widgets[0]}
            properties={widgetFilterProperties}
            onChangeFilter={(property) => {
              widgetFilterProperties.includes(property)
                ? setWidgetFilterProperties(
                    widgetFilterProperties.filter((widgetFilterProperty) => {
                      return widgetFilterProperty !== property;
                    })
                  )
                : setWidgetFilterProperties([
                    ...widgetFilterProperties,
                    property,
                  ]);
            }}
          />
        </Grid>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <div>
            <h2>Widgets</h2>
            {widgets
              .filter((widget) =>
                genericSearch(widget, ["title", "description"], query, true)
              )
              .sort((a, b) => genericSort(a, b, widgetSortProperty.property))
              .filter((widget) => genericFilter(widget, widgetFilterProperties))
              .map((widget) => {
                return <WidgetsComponent key={widget.id} widget={widget} />;
              })}
          </div>
        </List>
      </Grid>
    </Container>
  );
}

export default App;
