import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const wacl = document.getElementById('wacl-root');
const root = createRoot(wacl);

root.render(<App />);
