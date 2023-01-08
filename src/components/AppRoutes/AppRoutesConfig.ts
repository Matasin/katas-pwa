import { Camera } from '../Camera';
import { Sensors } from '../Sensors';
import { Notes } from '../Notes';
import Map from '../Map';

export const appRoutesConfig = [
  {
    path: '/camera',
    label: 'Camera',
    Component: Camera,
  },
  {
    path: '/meter',
    label: 'Meter',
    Component: Sensors,
  },
  {
    path: '/notes',
    label: 'Notes',
    Component: Notes,
  },
  {
    path: '/map',
    label: 'Map',
    Component: Map,
  },
];
