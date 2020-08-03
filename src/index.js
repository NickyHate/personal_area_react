import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCi-HNHRZJ8Z-QZaPHJvXmfuFFhalQFX_Q",
  authDomain: "takeoff-project.firebaseapp.com",
  databaseURL: "https://takeoff-project.firebaseio.com",
  projectId: "takeoff-project",
  storageBucket: "takeoff-project.appspot.com",
  messagingSenderId: "903620000038",
  appId: "1:903620000038:web:675e7bd9f0c25a57f369e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


