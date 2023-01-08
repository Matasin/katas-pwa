import { useEffect, useState } from 'react';
import { Meter } from '../Meter';

enum State {
  PENDING,
  GRANTED,
  DENIED,
}

export const Sensors = () => {
  const [state, setState] = useState(State.PENDING);

  useEffect(() => {
    const checkPermissions = async () => {
      // @ts-ignore
      if (typeof window.DeviceOrientationEvent?.requestPermission === 'function') {
        // @ts-ignore
        const result = await window.DeviceOrientationEvent.requestPermission();

        setState(result.state === 'granted' ? State.GRANTED : State.DENIED);
      } else {
        setState(State.GRANTED);
      }
    };

    checkPermissions();
  }, []);

  if (state === State.PENDING) {
    return null;
  }

  if (state === State.DENIED) {
    <div>Access to device orientation denied.</div>;
  }

  return (
    <Meter />
  );
};
