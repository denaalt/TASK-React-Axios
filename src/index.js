import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import Home from "./components/Home";
import PetList from "./components/PetList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//const queryClient = new queryClient();
//const router = createBrowserRouter([]);
//ReactDOM.createRoot(document.getElementById("root").render)
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/PetDetail/:petId",
    element: <PetDetail />,
  },
  {
    path: "/petList",
    element: <PetList />,
  },
]);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
