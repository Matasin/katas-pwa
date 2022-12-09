import { useEffect, useState } from 'react';

export const Offline = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setIsOffline(false));
    window.addEventListener('offline', () => setIsOffline(true));

    return () => {
      window.removeEventListener('online', () => setIsOffline(false));
      window.removeEventListener('offline', () => setIsOffline(true));
    };
  }, []);

  return (
    <div>
      <p>Currently you are: <b>{isOffline ? 'offline' : 'online'}</b></p>
    </div>
  );
};
