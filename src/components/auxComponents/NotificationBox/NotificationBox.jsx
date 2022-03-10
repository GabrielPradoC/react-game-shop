import React, { useEffect } from 'react';
import styles from './NotificationBox.module.css';

const NotificationBox = ({ notifications, setNotifications }) => {
  useEffect(() => {
    setTimeout(() => {
      setNotifications((oldNotifications) => {
        oldNotifications.shift();
        return [...oldNotifications];
      });
    }, 5000);
  }, [1]);

  const createNotifications = () => {
    if (notifications[0]) {
      return (
        <div>
          <h1>{notifications[0]}</h1>
        </div>
      );
    }
    return <></>;
  };

  return (
    <>
      {notifications[0] && (
      <div className={styles['notification-box-body']}>
        {createNotifications()}
      </div>
      ) }
    </>
  );
};

export default NotificationBox;
