import React from 'react';
import { createRoot, render } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../layouts/Access.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<Login />);