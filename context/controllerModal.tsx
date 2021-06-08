import React, { createContext, useContext, ReactNode, useState } from 'react';

  type modalContextType = {
    openModal: () => void;
    open: boolean;
  };
  
  const modalContextDefaultValues: modalContextType = {
    openModal: () => {},
    open: null,
  };
  
  const ModalContext = createContext<modalContextType>(modalContextDefaultValues);
  
  export function useModal() {
    return useContext(ModalContext);
  }
  
  type Props = {
    children: ReactNode;
  };
  
  export function ModalProvider({ children }: Props) {
    const [open, setOpen] = useState(false);
  
    const openModal = () => {
      setOpen(!open);
    };
  
    const value = {
      openModal,
      open,
    };
  
    return (
      <>
        <ModalContext.Provider value={value}>
          {children}
        </ModalContext.Provider>
      </>
    );
  }