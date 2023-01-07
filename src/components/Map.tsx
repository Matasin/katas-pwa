import { useEffect, useState } from 'react';
import {
  Map as GoogleMap,
  GoogleApiWrapper,
  IProvidedProps,
  Marker,
} from 'google-maps-react';

const GOOGLE_MAPS_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

const MapContainer = (props: IProvidedProps) => {
  const [state, setState] = useState<any>({
    // Katowice
    center: {
      lat: 50.264893,
      lng: 19.023781,
    },
    markers: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => (
        setState((s: any) => ({
          ...s,
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
        }))
      ), () => alert('Location is off on your phone'));
    }
    else {
      alert('Sorry, your browser does not support geolocation services.');
    }
  }, []);


  const fetchPlaces = (mapProps: any, map: any) => {
    let coordinates: any = [];
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    var request = {
      location: state.center,
      radius: '500',
      query: ['food', 'restaurant']
    };
    service.textSearch(request, (results: any, status: any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          coordinates.push(results[i]);
        }
        setState((s: any) => ({
          ...s,
          markers: coordinates
        }));
      }
    });
  };

  if (!props.loaded) {
    return <div>Loading map...</div>;
  }

  return (
    <div className='row'>
      {/* @ts-ignore */}
      <GoogleMap
        key={state.center.lat + state.center.lng}
        google={props.google}
        initialCenter={{
          lat: state.center.lat,
          lng: state.center.lng
        }}
        onReady={fetchPlaces}
        containerStyle={{
          position: 'unset',
        }}
      >
        {state.markers != null ?
          state.markers.map((coords: any) => (
            <Marker
              key={coords.place_id}
              // @ts-ignore
              position={coords.geometry.location}
              placeId={coords.place_id}
            />
          )) : undefined}
        <Marker
          // @ts-ignore
          position={{ lat: state.center.lat, lng: state.center.lng }}
          icon={{
            url: process.env.PUBLIC_URL + '/flag.png',
          }} />
      </GoogleMap>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_KEY ?? ''
})(MapContainer);
