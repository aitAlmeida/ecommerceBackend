import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import Home from './pages/home/Home';


function App() {
  return (
    <BrowserRouter>
      <Topbar/>
        <div className="container">
          <Sidebar/> 
          <Home/>
        </div>
    </BrowserRouter>
  );
}

export default App;
