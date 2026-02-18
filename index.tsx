import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("System: Initialization verified. Mounting UI...");

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("System: App successfully mounted.");
  } catch (error) {
    console.error("System: Critical mounting error:", error);
  }
} else {
  console.error("System Failure: Root container 'root' missing from DOM.");
}