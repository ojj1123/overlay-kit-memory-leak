import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { OverlayProvider } from 'overlay-kit';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OverlayProvider>
      <App />
    </OverlayProvider>
  </React.StrictMode>
);
