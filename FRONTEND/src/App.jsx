import { useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../Components/Home/Home'
import Features from '../Components/Features/Features';
import About from '../Components/About/About';
import Services from '../Components/Services/Services';
import { AuthContext } from '../Components/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => { // useCallback is used to prevent infinite loops
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Router>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />

              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />

              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
         
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
