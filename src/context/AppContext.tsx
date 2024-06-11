import React, { createContext, useState, useContext, ReactNode } from 'react';
import { MenuOptions, AppContextType } from './AppContextTypes';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeButton, setActiveButton] = useState<MenuOptions | null>(null);

  return (
    <AppContext.Provider value={{ activeButton, setActiveButton }}>
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
