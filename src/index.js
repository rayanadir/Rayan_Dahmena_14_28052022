import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store)
=======
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
>>>>>>> f9c9c78cd54d7becca87c581c00ad311dc484171

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<<<<<<< HEAD
    <PersistGate loading={null} persistor={persistor}>
      <React.Fragment>
        <HashRouter>
          <App />
        </HashRouter>
      </React.Fragment>
    </PersistGate>
=======
    <React.Fragment>
      <HashRouter>
        <App />
      </HashRouter>
    </React.Fragment>
>>>>>>> f9c9c78cd54d7becca87c581c00ad311dc484171
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
