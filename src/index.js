import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
