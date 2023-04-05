// npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// components
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// stylesheets
import './index.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#132E32',
      paper: '#2D3D3F',
    },
    primary: {
      main: '#8E9B90',
    },
    secondary: {
      main: '#F1C40F',
    },
    error: {
      main: '#E63946',
    },
    text: {
      primary: 'white',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={darkTheme}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ThemeProvider>
);
