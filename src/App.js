import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route , Switch, withRouter} from "react-router-dom"
import React from 'react';
import Navbar from './components/Navbar'
import  { useState } from '/react'
import Pages from './components/Pages'

function App(){
 const [page, setPage] = useState("home")
    return (
      <div className="App">
        <Navbar setPage={setPage}/>
        <Pages page={page}/>
      </div>
    );
  }



export default App;
