import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

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
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success");
    }
  }
  return (
    <>
      <Navbar title = "TextUtils" about = "About Us" mode={mode} toggleMode ={toggleMode}/>
      <Alert alert={alert}/>
      <div className= "container my-3">
      <TextForm heading = "Enter your text to analyse " mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
