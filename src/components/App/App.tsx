import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { MainPage } from 'pages';

export function App() {
  return (
    <BrowserRouter>
      Header
      <Container>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
