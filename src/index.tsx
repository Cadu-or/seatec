import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';

// const { useToken } = theme
// const globalToken = useToken()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <App/>
    </ConfigProvider>
  </React.StrictMode>
)

// theme={{token: [...globalToken, {colorPrimary: '#4FA1C1'}]}}