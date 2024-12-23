import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import './assets/scss/_common.scss';
// import reportWebVitals from './reportWebVitals';
// import MainList from './views/main/MainList';
import 'index.css';
import 'assets/scss/_common.scss';
import MainList from 'views/main/MainList';
import reportWebVitals from 'reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <React.StrictMode>
  <MainList />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
