import React from 'react';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import { useAuth0 } from '@auth0/auth0-react';






function App() {
  //destructuring
  const { isAuthenticated } = useAuth0();
  return (

    <BrowserRouter>
      {
        isAuthenticated ? (
          <div>
            <Header />
            <Routes>
              <Route exact path='/' element={< Home />} />
              <Route path='/Profile' element={< Profile />} />
              <Route path='/home' element={< Home />} />
              <Route path='/aboutus' element={< AboutUs />} />

            </Routes>
          </div>
        ) : (
          <Login />
        )

      }

    </BrowserRouter>


  )
}

export default App