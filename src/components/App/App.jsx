import { lazy, Suspense } from "react";
import SharedLayout from "../SharedLayout/SharedLayout.jsx";
import "./App.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import CamperReviews from "../CamperReviews/CamperReviews.jsx";
import Features from "../Features/Features.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

function App() {
  return (
    <>
      <SharedLayout>
        <Suspense fallback={<div>Please wait loading page...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<CamperPage />}>
              <Route index element={<Navigate to="features" replace />} />
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<CamperReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </SharedLayout>
    </>
  );
}

export default App;
