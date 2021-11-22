import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppImage from '../src/components/Warehouse01'

import { storage } from 'firebase';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'
import ReactDOM, {render} from 'react-dom';

render(
  <BrowserRouter>
    <App />
    <AppImage/>
  </BrowserRouter>,
  document.querySelector('#root')
)

serviceWorker.unregister();