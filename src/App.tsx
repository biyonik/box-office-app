import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import React from 'react';
import StarredPage from './pages/StarredPage';
import MainLayout from './layouts/MainLayout';
import ShowDetail from './pages/ShowDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/starred" element={<StarredPage />} />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
