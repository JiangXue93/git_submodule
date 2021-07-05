import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Rem from '@q/gt-rem-js';
// import reportWebVitals from './reportWebVitals';

let rem = new Rem({
  designWidth: 375,
  coverMode: false,
  rootValue: 100
});

rem.ready(function(){ 
  // html根元素 font-size 设置完成后，执行该回调方法
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();