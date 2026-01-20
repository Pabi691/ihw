import React from 'react';
import './index.css';
import Root from './Root';

import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>
// );
root.render(<Root />);