import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import {
  sortByBar,
  fooBar,
  sortByAge,
  sortByFoo,
  sortedGenFoo,
} from "./generic/generics";

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
  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ flexGrow: 1, pt: 10, minWidth: "900px" }}>
          <Grid container spacing={2}>
            <Grid xs={6} md={6} xl={12}>
              <Item>
                <Typography variant={"h3"}>Widgets</Typography>
                xs=6 md=8
              </Item>
            </Grid>
            <Grid xs={6} md={6} xl={12}>
              <Item>
                {" "}
                <Typography variant={"h3"}>People</Typography>
                xs=6 md=4
              </Item>
            </Grid>
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default App;
