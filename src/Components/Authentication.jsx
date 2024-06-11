// export const fakeAuth = {
//     isAuthenticated: false,
//     authenticate(cb) {
//       this.isAuthenticated = true;
//       setTimeout(cb, 100); // Fake async
//     },
//     signout(cb) {
//       this.isAuthenticated = false;
//       setTimeout(cb, 100); // Fake async
//     },
//   };
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const storedLoginStatus = localStorage.getItem('isLoggedIn')
    if(storedLoginStatus === 'true'){
        setIsLoggedIn(true)
    }
  })
  const login = () =>{ 
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn','true');
  };
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData')
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);




  