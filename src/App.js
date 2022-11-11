import 'bootstrap/dist/css/bootstrap.css'

import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap'
import { Route, Routes } from 'react-router-dom';
import Home from './components/home'
import Login from './components/login'
import Contact from './components/contact'
import Registration from './components/registration'
import About from './components/about'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />

      </Routes>
    </>
  );
}

export default App;
