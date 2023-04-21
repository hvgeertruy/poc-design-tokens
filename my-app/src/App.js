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
          <img src={logo} className="App-logo" alt="logo" />
          <Box>
            Edit <code>src/App.js</code> and save to reload.
          </Box>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button>Hello world</Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
