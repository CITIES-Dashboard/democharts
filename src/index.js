import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';

import {fetchSheetData} from './data.js';

// SyncFusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkBhXn5fc31UT2VZU0c=');

const root = ReactDOM.createRoot(document.getElementById('root'));

const google = window.google;
google.charts.load('current');
google.charts.setOnLoadCallback(fetchSheetData);

export function renderApp(){
  console.log("Calling root.render")
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}




