import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("System: Bridge established. Initiating React Mount Sequence...");

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("System: Success. Application active.");
  } catch (error) {
    console.error("System: Mount Exception:", error);
  }
} else {
  console.error("System: Root element not found.");
}