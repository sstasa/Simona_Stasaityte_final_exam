import { createContext, useState, useContext } from 'react';

const UserContext = createContext({
  login({ token, email }) {},
  logout() {},
  isUserLoggedIn: false,
});

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const tokenFromStorage = localStorage.getItem('userId');
  const emailFromStorage = localStorage.getItem('email');
  const [id, setId] = useState(tokenFromStorage);
  const [emailValue, setEmailValue] = useState(emailFromStorage);
  const isUserLoggedIn = !!id;

  const login = ({ idToken, email }) => {
    setId(idToken);
    localStorage.setItem('userId', idToken);
    setEmailValue(email);
    localStorage.setItem('email', email);
  };

  const logout = () => {
    setId('');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
  };

  const contextValue = {
    login,
    logout,
    isUserLoggedIn,
    emailValue,
    id,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
