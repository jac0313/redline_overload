import Navbar from './components/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Bios from './components/Bios';
import Shows from './components/Shows';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'


function App() {
  return (
  <main>
      
      <Navbar/>
      <Routes> 
        <Route path='/Bios' element= {<Bios/>} />
      </Routes>
      <Routes>
        <Route exact path='/Home' element= {<Home/>} />
      </Routes>
      <Routes>
        <Route path='/Shows' element= {<Shows/>} />
      </Routes>
      <Footer/>
  </main>    
   
  );
}

export default App;
