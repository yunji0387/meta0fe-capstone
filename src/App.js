import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './scenes/Home';
import Delivery from './scenes/Delivery';
import Menu from './scenes/Menu';
import Reservation from './scenes/Reservation';
import About from './scenes/About';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Navbar />
          <main>
            <Box sx={{ pt: 8 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservation" element={<Reservation />} />
              </Routes>
            </Box>
          </main>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
