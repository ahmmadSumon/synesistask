"use client"
import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [clickedPosts, setClickedPosts] = useState([]);

  const notificationCount = clickedPosts.length;
  const incrementNotification = (title) => {
    if (!clickedPosts.includes(title)) {
      setClickedPosts((prev) => [...prev, title]);
    }
  };

  const removePost = (title) => {
    setClickedPosts((prev) => prev.filter((post) => post !== title));
  };

  return (
    <NotificationContext.Provider
      value={{
        clickedPosts,
        notificationCount,
        incrementNotification,
        removePost,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
