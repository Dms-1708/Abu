import React from "react";
import { createRoot } from "react-dom/client";
import DeepSeekWebsite from "./DeepSeekWebsite";
import "./styles.css";

const root = document.getElementById("root")!;
createRoot(root).render(
  <React.StrictMode>
    <DeepSeekWebsite />
  </React.StrictMode>
);
