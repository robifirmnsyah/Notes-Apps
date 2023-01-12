import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NotesApp from './components/NotesApps';
import './style/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <NotesApp />
 </BrowserRouter>
);