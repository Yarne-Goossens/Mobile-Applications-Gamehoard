import React, { createContext, useContext, ReactNode, useState } from 'react';

interface DataContextProps {
  children: ReactNode;
}

interface DataContextValue {
  updateData: boolean;
  setUpdateData: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export const DataProvider: React.FC<DataContextProps> = ({ children }) => {
  const [sharedData, setSharedData] = useState<boolean>(false);

  const contextValue: DataContextValue = {
    updateData: sharedData,
    setUpdateData: setSharedData,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
