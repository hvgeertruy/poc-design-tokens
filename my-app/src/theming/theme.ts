import { createTheme } from "@mui/material/styles";
import { MUI_TOKENS_PALETTE } from "../build/tokens/tokens_palette";
import { MUI_TOKENS_SPACING } from "../build/tokens/tokens_spacing";
import { MUI_TOKENS_TYPOGRAPHY } from "../build/tokens/tokens_typography";

export const theme = createTheme({
  palette: MUI_TOKENS_PALETTE,
  spacing: MUI_TOKENS_SPACING,
  typography: MUI_TOKENS_TYPOGRAPHY,
});
