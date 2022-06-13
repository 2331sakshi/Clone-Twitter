import React from 'react';
import Sidebar from "./Sidebar";
import Feed from './Feed.js';
import Widgets from './Widgets.js';
import './App.css';

function App() {
  return (
    //BEM convention
    <div className="app">

      <Sidebar />

      <Feed />

      <Widgets />

    </div>
  );
}

export default App;
