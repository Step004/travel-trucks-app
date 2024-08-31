import { lazy, Suspense } from "react";
import SharedLayout from '../SharedLayout/SharedLayout.jsx';
import './App.module.css'
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage.jsx"));
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage.jsx"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));


function App() {
  return (
    <>
      <SharedLayout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<CamperPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </SharedLayout>
    </>
  );
}

export default App
