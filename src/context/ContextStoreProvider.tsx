'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  FC,
} from 'react';

type DataType = {
  firstName: string;
};

interface ContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}
const GlobalContext = createContext<ContextProps>({
  userId: '',
  setUserId: (): string => '',
  data: [],
  setData: (): DataType[] => [],
  theme: 'light',
  setTheme: (): string => '',
});

interface GlobalContextProvider {
  children: ReactNode;
}

export const GlobalContextProvider: FC<GlobalContextProvider> = ({
  children,
}) => {
  const [userId, setUserId] = useState('');
  const [theme, setTheme] = useState('');
  const [data, setData] = useState<[] | DataType[]>([]);

  return (
    <GlobalContext.Provider
      value={{ userId, setUserId, data, setData, theme, setTheme }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
