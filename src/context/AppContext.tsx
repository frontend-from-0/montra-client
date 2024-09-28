import React, { createContext, useState, useContext, ReactNode } from 'react';
import { MenuOptions } from './AppContextTypes';
import { currentUser, User } from 'src/UsersData';

export interface AppContextType {
  activeTab: MenuOptions | null;
  setActiveTab: React.Dispatch<React.SetStateAction<MenuOptions | null>>;
  user: User[];
  setUser: React.Dispatch<React.SetStateAction<User[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState<MenuOptions | null>(null);
  const [user, setUser] = useState<User[]>(currentUser);
  return (
    <AppContext.Provider value={{ activeTab, setActiveTab, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { MenuOptions };
