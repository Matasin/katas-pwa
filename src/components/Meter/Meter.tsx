import { Vector3 } from '../types';
import { useCallback, useState, useEffect } from 'react';

export const Meter = () => {
  const [read, setRead] = useState<Vector3>({
    x: 0,
    y: 0,
    z: 0,
  });

  const handleEvent = useCallback((event: DeviceMotionEvent) => {
    const vector = new Vector3(
      event.accelerationIncludingGravity?.x ?? 0,
      event.accelerationIncludingGravity?.y ?? 0,
      event.accelerationIncludingGravity?.z ?? 0,
    );

    setRead(vector);
  }, [
    setRead,
  ]);

  useEffect(() => {
    window.addEventListener('devicemotion', handleEvent, true);

    return () => {
      window.removeEventListener('devicemotion', handleEvent);
    };
  }, [
    handleEvent,
  ]);

  const calculateValue = (val: number) => (
    ((val || 0) * 10).toFixed(0)
  );

  return (
    <div className='container'>
      <div className='grid-item'>
        <div className='vmarkerl'>-45°</div>
      </div>
      <div className='grid-item'>
        <div className='hmarkert'>-45°</div>
      </div>
      <div className='grid-item'>
        <div className='hmarkert'>0°</div>
        <div className='hbar'>
          <div className='bg_hbarl'>
            <div className='hbarr' style={{ width: `100%`, left: `${calculateValue(10 - read.x)}%` }}></div>
          </div>
          <div className='bg_hbarr'>
            <div className='hbarr' style={{ width: read.x < 0 ? `${calculateValue(Math.abs(read.x))}%` : '0' }}></div>
          </div>
          <div className='hbartxt'>
            {calculateValue(read.x)}
          </div>
        </div>
      </div>
      <div className='grid-item'>
        <div className='vmarkerr'>-45°</div>
        <div className='hmarkert thack'>45°</div>
      </div>
      <div className='grid-item'>
        <div className='vmarkerl'>0°</div>
        <div className='vbar'>
          <div className='bg_vbart'>
            <div className='vbart' style={{ height: `100%`, top: `${calculateValue(10 - read.y)}%` }}></div>
          </div>
          <div className='bg_vbarb'>
            <div className='vbarb' style={{ height: read.y < 0 ? `${calculateValue(Math.abs(read.y))}%` : '0' }}></div>
          </div>
          <div className='vbartxt'>
            {calculateValue(read.y)}
          </div>
        </div>
      </div>
      <div className='grid-item'></div>
      <div className='grid-item'></div>
      <div className='grid-item'>
        <div className='vmarkerr'>0°</div>
      </div>
      <div className='grid-item'>
        <div className='vmarkerl'>45°</div>
      </div>
      <div className='grid-item'></div>
      <div className='grid-item'></div>
      <div className='grid-item'>
        <div className='vmarkerr'>45°</div>
      </div>
      <div className='grid-item'></div>
      <div className='grid-item'>
        <div className='hmarkerb'>-45°</div>
      </div>
      <div className='grid-item'></div>
      <div className='grid-item'>
        <div className='hmarkerb'>45°</div>
      </div>
    </div>
  );
};
