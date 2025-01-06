
"use client";
import React, { createContext, useContext, useState } from "react";

// Create Context
const NotificationContext = createContext();

// Create a provider component
export const NotificationProvider = ({ children }) => {
  const [notificationCount, setNotificationCount] = useState(0);

  // Function to increment notification count
  const incrementNotification = () => {
    setNotificationCount((prevCount) => prevCount + 1);
  };

  // Function to reset notification count
  const resetNotification = () => {
    setNotificationCount(0);
  };

  return (
    <NotificationContext.Provider
      value={{ notificationCount, incrementNotification, resetNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to use notification context
export const useNotification = () => {
  return useContext(NotificationContext);
};
