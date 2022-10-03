import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light'); //Wheather Dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enable", "success")
      //document.title = 'TextUtils - Dark Mode';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enable", "success")
      //document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <BrowserRouter>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode}/> {/* togglemode ek funtion h  ya props h*/}
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
    </Routes>
    </div> 
    </BrowserRouter>
    </>
  );
}

export default App;
