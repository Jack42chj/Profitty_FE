import { createTheme } from "@mui/material";

const themes = createTheme({
    typography: {
      fontFamily: [
        "Pretendard ExtraBold",
        "Pretentard Light",
        ]
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': {
            fontFamily: 'YourCustomFont', // Same font family name as above
            src: `url('./fonts/your-custom-font.woff2') format('woff2')`, // Font file path
            /* Add other font formats if available (e.g., woff, ttf, eot) */
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
        },
      },
    },
  });

export default themes;