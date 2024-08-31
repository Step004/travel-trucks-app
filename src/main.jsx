import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor, store } from "./redux/store.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    
          <BrowserRouter>
            <App />
          </BrowserRouter>
        
    </HelmetProvider>
  </StrictMode>
);
