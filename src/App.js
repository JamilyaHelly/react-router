import React from 'react';
import Navbars from './Components/Navbars';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';







function App() {
  
  return (
    <BrowserRouter>
     <div className="App">
     <Navbars/>
    <Routes>
      <Route exact  path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
