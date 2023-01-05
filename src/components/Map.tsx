import {
  Map as GoogleMap,
  GoogleApiWrapper,
  IProvidedProps,
} from 'google-maps-react';

const GOOGLE_MAPS_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

const MapContainer = (props: IProvidedProps) => (
  <div className='row'>
    <GoogleMap
      google={props.google}
      initialCenter={{
        lat: 49.807621,
        lng: 19.055840,
      }}
      containerStyle={{
        position: 'unset',
      }}
    />
  </div>
);

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_KEY ?? ''
})(MapContainer);
