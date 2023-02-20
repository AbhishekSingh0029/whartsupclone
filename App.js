
import './App.css';
import { useState } from 'react';
import Signin from './Signin';
function App() {
  const [name,setName]=useState("aa");
  return (
    <div className="App">
      
        <Signin />
        
      </div>
    
  );
}

export default App;
