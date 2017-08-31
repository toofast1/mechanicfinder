import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import MechanicFinder from './MechanicFinder';

ReactDOM.render((
    <BrowserRouter>
        <MechanicFinder />
    </BrowserRouter>
  ), document.getElementById("app"));