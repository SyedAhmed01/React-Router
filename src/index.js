import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Todolist from './Todo';

ReactDOM.render(
<div>
<BrowserRouter>
   <App />
</BrowserRouter>
<Todolist />
</div>
, document.getElementById('root'));
