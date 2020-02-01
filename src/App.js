import React from 'react';
import './App.css';
import InstancePage from './Components/InstancePage/index'
import logo from './Assets/logo.svg'
function App() {
  return (
    <div className="App">
          <header>
      <nav>
        <img className='logo' src={logo}/>
      </nav>
    </header>
      <InstancePage />
    </div>
    
  );
}

export default App;
