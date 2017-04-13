import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Home } from './components';
import './index.css';

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
