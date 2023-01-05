import React from 'react'
import ReactDOM from 'react-dom/client';
import HelloWorldApp from './HelloWorldApp';
import {FirstApp} from './FirstApp';
import { CounterApp } from "./CounterApp";

import './style.css';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title='Hola Mundo'/>
    </React.StrictMode>
);