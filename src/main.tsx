import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App.tsx';
import './styles/Global.scss';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
