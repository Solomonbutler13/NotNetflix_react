import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import LandingPage from './components/LandingPage';
import './index.css';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

// Wrap your component with createRoot().render()
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
