import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    }) 

    setTimeout (()=>{setAlert(null);},1000);
  }

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode enabled","success");
      //document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success");
      //document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Router>
      <Navbar title = "TextUtils" about = "About Us" mode={mode} toggleMode ={toggleMode}/>
      <Alert alert={alert}/>
      <div className= "container my-3">
      <Routes>
        <Route exact path="/About" element={<About mode={mode}/>}></Route>
        <Route exact path="/" element={<TextForm heading = "Enter your text to analyse " mode={mode} showAlert={showAlert} />}></Route>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
