'use client';

import { useEffect, useState } from 'react';
import React from 'react';

type NotificationProps = {
  message: string;
  duration?: number;
};

const Notification: React.FC<NotificationProps> = ({
  message,
  duration = 10000,
}) => {
  const [isVisible, setIsVisible] = useState<Boolean>(true);
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 10000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className="bg-white">
      <button onClick={handleClick}>show</button>
      {show && <p>{message}</p>}
    </div>
  );
};

export default Notification;
