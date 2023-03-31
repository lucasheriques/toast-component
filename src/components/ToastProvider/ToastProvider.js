import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [currentToasts, setCurrentToasts] = React.useState([]);
  useEscapeKey(() => setCurrentToasts([]));

  function killToast(id) {
    const newToasts = [...currentToasts].filter((toast) => toast.id !== id);
    setCurrentToasts(newToasts);
  }

  function addToast({ variant, message }) {
    const newToasts = [...currentToasts];
    newToasts.push({ id: Math.random(), message, variant });
    setCurrentToasts(newToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        currentToasts,
        addToast,
        killToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
