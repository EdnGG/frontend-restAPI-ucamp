import { useState, createContext } from 'react';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: 'Guest', email: 'gresseden@gmail.com' });
  
  const data = {user, setUser}
  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
}


