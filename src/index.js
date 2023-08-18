import React from "react";
import ReactDOM from "react-dom/client"; // Import the specific ReactDOM method
import "./index.css";
import App from "./App";
import DictionaryPage from "./Pages/DictionaryPage/DictionaryPage.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import necessary routing components
import { DictionaryProvider } from "./Context/Dictionary.context"; // Import your custom DictionaryProvider

// Create a browser router configuration for your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Render the App component when the path is "/"
  },
  {
    path: "/dictionary",
    element: <DictionaryPage />, // Render the DictionaryPage component when the path is "/dictionary"
  },
]);

// Create a root instance for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the components within a React StrictMode
root.render(
  <React.StrictMode>
    {/* Wrap your application with the DictionaryProvider */}
    <DictionaryProvider>
      {/* Provide the router configuration using RouterProvider */}
      <RouterProvider router={router} />
    </DictionaryProvider>
  </React.StrictMode>
);
