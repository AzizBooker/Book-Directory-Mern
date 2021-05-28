import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ApiCall from './api/Api';
import { useState, useEffect} from 'react'
import Homepage from './Pages/HomePage'
function App() {

  const [text,setText]=useState(" ")
  

  return (
  <div>
    <Homepage />
  </div>
  );
}

export default App;
