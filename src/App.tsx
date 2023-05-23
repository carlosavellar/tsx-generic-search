import React, { useState } from "react";
import "./App.css";
import { WidgetsComponent } from "./components/content/Widgets";
import { widgets } from "./mocks/widgets";
import List from "@mui/material/List";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { SearchInput } from "./components/Sorters";
import { genericSearch } from "./utils/genericSearch";

function App() {
  const [query, setQuery] = useState<string>("");

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SearchInput setInputQuery={setQuery} />
        </Grid>
        <Grid item xs={4}>
          e
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
