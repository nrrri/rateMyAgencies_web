import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './css/index.css'
// import App from './App';
import Search from './search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* nav bar here */}

    <div className='container'>
    <a href="./index.html"><h1 class="text">Rate My Agency</h1></a>
    <Search />
    </div>
  </React.StrictMode>
);
