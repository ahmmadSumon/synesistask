// components/BellCounter.js
"use client";
import React from "react";
import Image from "next/image";
import { useNotification } from "../app/context/NotificationContext"; // Import the hook

const BellCounter = () => {
  const { notificationCount } = useNotification(); // Access notification count

  return (
    <div className="mr-[25px] flex justify-center items-center gap-[15px] relative">
      <div>Bell Counter</div>
      <div className="relative">
        <Image
          src="/images/Icon.png"
          alt="notification icon"
          width={21.33}
          height={26.67}
        />
        {notificationCount > 0 && (
          <span className="absolute -top-4 -right-4 flex items-center justify-center w-5 h-5  text-black font-bold text-2xl  rounded-full">
            {notificationCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default BellCounter;
