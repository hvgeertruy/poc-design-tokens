import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theming/theme.ts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Box>
            <h1>
              This is a Proof of Concept on synchronizing our design tokens.
            </h1>
            <h2>We have some MUI components on this page</h2>
            <p>
              When changing the design tokens, you should see them updated here.
              Steps to take:
              <br />- Update design tokens in figma
              <br />- Synchronize design tokens in figma using `push to github`
              <br />- pull changes into `poc-design-tokens`
              <br />- run `npm run build:design-tokens` in `poc-design-tokens`
              <br />- The app should update
            </p>
          </Box>

          <Button variant="contained">Hello world</Button>
          <Button variant="outlined">Hello world</Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
