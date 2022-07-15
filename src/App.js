import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [btnText, setbtnText] = useState('Enable DarkMode')
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      setbtnText('Enable LightMode');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark Mode has been enabled!","success");
    }
    else{
      setMode('light');
      setbtnText('Enable DarkMode');
      document.body.style.backgroundColor= 'white'
      showAlert("Light Mode has been enabled!","success");
    }
  }
  return (
    <>
      <Router>
      <Navbar title="Text Analyzer" aboutText="About Us" mode={mode} toggleMode={toggleMode} btn={btnText}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
            <Route exact path='/' element={<TextForm  showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>}/>
            <Route exact path='/about' element={<About mode={mode}/>}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
