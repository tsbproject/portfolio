import { createContext, useContext, useState } from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
    userName: '', // New state to store user's name
  });

  const onOpen = (type, message, userName) => {
    setState({ isOpen: true, type, message, userName }); // Include userName in the state
  };

  const onClose = () => {
    setState({ isOpen: false, type: '', message: '', userName: '' });
  };

  // Value to be provided by the context
  const value = {
    ...state,
    onOpen,
    onClose,
  };

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
