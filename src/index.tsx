import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import { Wrapper } from '@googlemaps/react-wrapper';

import reportWebVitals from './reportWebVitals';
import App from './App';

import './index.css';

// const GOOGLE_MAPS_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Wrapper> */}
    <App />
    {/* </Wrapper> */}
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();
