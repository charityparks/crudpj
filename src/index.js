import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDv9RJv9e3wyI3yFMLjZWCTD4pYc4VKiLE",
  authDomain: "crudpj-a3baa.firebaseapp.com",
  projectId: "crudpj-a3baa",
  storageBucket: "crudpj-a3baa.appspot.com",
  messagingSenderId: "507750211121",
  appId: "1:507750211121:web:48e4d591f1fd389d023f10"
};
firebase.initializeApp(config);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
