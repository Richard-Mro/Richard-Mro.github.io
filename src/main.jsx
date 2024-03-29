import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ErrorBoundary from "./Pages/ErrorBoundary.jsx";
import { ThemeProvider } from "./Theme.jsx";

const root = document.getElementById("root");
const wrap = ReactDOM.createRoot(root);

wrap.render(
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
);
