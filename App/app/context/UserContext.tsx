import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserData {
  userType: string;
  email: string;
  password: string;
  nomeCompleto: string;
  celular: string;
  cpf: string;
  rg: string;
  cep: string;
  servicos: string[];
}

interface UserContextProps {
  user: UserData | null;
  setUser: (user: UserData) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
