import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/App.scss';
import './stylesheets/index.scss';
import './stylesheets/PokeList.scss';
import './stylesheets/Pokemon.scss';
import App from './components/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

