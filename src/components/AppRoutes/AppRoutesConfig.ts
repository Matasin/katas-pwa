import { Camera } from '../Camera';
import { Meter } from '../Meter';
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
    Component: Meter,
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
