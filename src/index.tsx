import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        <App/>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
)