import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // ✅ Import Provider
import App from './App';
import store from './redux/store'; // ✅ Import your Redux store
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* ✅ Wrap with Provider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

