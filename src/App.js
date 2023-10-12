import React from "react";
import { Suspense } from "react";
import Routers from "./routes";
import "./App.css";

function App() {
  return <Routers />;
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
