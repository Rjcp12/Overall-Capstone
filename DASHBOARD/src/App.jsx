import React, {useState,useCallback} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../Components/Shared/Dashboard';
import Signup from '../Components/Signup.jsx/Signup';
import Table from './../Components/Table/Table';
import Header from '../Components/Header/Header';

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
        <Header />
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/table" element={<Table />} />

              <Route path="*" element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <>
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/signup" />} /> 
           </>
          )}    
        </Routes>   
      </Router>
    </AuthContext.Provider>
  )
}

export default App
