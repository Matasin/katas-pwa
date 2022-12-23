import { Camera } from './components/Camera';
import { Meter } from './components/Meter';
import { Offline } from './components/Offline';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='row'>
        <ul>
          <li>[REACHABILITY] Application that knows we are online or not</li>
          <Offline />
        </ul>
      </div>
      <div className='row'>
        <ul>
          <li>[CAMERA] Movement detector/QR code scanner app (use device camera)</li>
          <Camera />
        </ul>
      </div>
      <div className='row'>
        <ul>
          <li>[DEVICE POSITION] Application that works as level meter</li>
          <Meter />
        </ul>
      </div>
      <div className='row'>
        <ul>
          <li>[GEOLOCATION] The nearest PoI (point of interest) in your city (use map & geolocation)</li>
          To do
        </ul>
      </div>
      <div className='row'>
        <ul>
          <li>[OFFLINE] Notes app that allows creation of multiple notes (title, description) that are available even if we reenter the application</li>
          To do
        </ul>
      </div>
    </div>
  );
};

export default App;
