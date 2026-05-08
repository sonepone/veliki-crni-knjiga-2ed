import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import YourComponent from     './components/MyMUI_component.jsx';
import AtmZapisnikScreen from './components/AtmZapisnikScreen.jsx';

const theme = createTheme(); // Customize your theme here

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline resets browser styles to follow Material Design */}
      <CssBaseline />
      {/* <YourComponent /> */}
      <AtmZapisnikScreen />
    </ThemeProvider>
  );
}

export default App;