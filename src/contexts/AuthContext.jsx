import React, { createContext, useContext, useState } from 'react';
import { getToken } from '../api/store';

// Create the context outside the component to keep the same instance across renders
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [token,setToken]=useState(getToken()??null);

  return (
    <AuthContext.Provider value={{ isAuth, setAuth ,token,setToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
