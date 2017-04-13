import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { HomeContainer, AboutContainer } from './container';
import reducer from './reducers';
import './index.css';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={HomeContainer}/>
        <Route path="/about" component={AboutContainer}/>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
