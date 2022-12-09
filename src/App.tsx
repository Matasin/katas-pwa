import './App.css';
import { Camera } from './components/Camera';
import { Offline } from './components/Offline';

const App = () => {
  return (
    <div className='App'>
      {/* <li>[GEOLOCATION] The nearest PoI (point of interest) in your city (use map & geolocation)</li> */}
      {/* <li>[OFFLINE] Notes app that allows creation of multiple notes (title, description) that are available even if we reenter the application</li> */}
      <div className='row'>
        <ul>
          <li>[CAMERA] Movement detector/QR code scanner app (use device camera)</li>
          <Camera />
        </ul>
      </div>
      <div className='row'>
        <ul>
          <li>[REACHABILITY] Application that knows we are online or not</li>
        </ul>
        <Offline />
      </div>
      {/* <li>[DEVICE POSITION] Application that works as level meter</li> */}
    </div>
  );
};

export default App;
