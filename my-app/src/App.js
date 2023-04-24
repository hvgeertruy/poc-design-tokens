import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theming/theme.ts";

const StyledContainer = styled(
  "div",
  {}
)(({ theme }) => ({
  borderRadius: "4px",
  padding: theme.spacing(3),
  fontSize: "16px",
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Box>
            <Typography variant="h1">
              This is a Proof of Concept on synchronizing our design tokens.
            </Typography>
            <Typography variant="h2">
              We have some MUI components on this page
            </Typography>
            <p>
              When changing the design tokens, you should see them updated here.
            </p>
            <StyledContainer>
              Steps to take:
              <br />- Update design tokens in figma
              <br />- Synchronize design tokens in figma using `push to github`
              <br />- pull changes into `poc-design-tokens`
              <br />- run `npm run build:design-tokens` in `poc-design-tokens`
              <br />- The app should update
            </StyledContainer>
          </Box>

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button variant="contained">Ok sounds good</Button>
            <Button variant="outlined">Let me think on it</Button>
          </ButtonGroup>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
