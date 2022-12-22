export const Meter = () => {
  return (
    <div>Meter</div>
  );
};

// // @ts-ignore
// // import ReactAccelerometer from 'react-accelerometer';

// import { useEffect, useState } from 'react';

// export const Meter = () => {
//   const [state, setState] = useState<any>();

//   useEffect(() => {
//     if (window.DeviceOrientationEvent) {
//       window.addEventListener("deviceorientation", function (event) {
//         setState({
//           ...state,
//           event: [event.beta, event.gamma]
//         });
//       }, true);
//     } else if (window.DeviceMotionEvent) {
//       window.addEventListener('devicemotion', function (event) {
//         if (event.acceleration?.x && event.acceleration.y) {
//           setState({
//             ...state,
//             acceleration: [event.acceleration.x * 2, event.acceleration.y * 2]
//           });
//         }
//       }, true);
//     } else {
//       // window.addEventListener("MozOrientation", function (event) {
//       //   setState({
//       //     ...state,
//       //     orientation: [orientation.x * 50, orientation.y * 50]
//       //   });
//       // }, true);
//     }
//   }, []);

//   return (
//     <div>{JSON.stringify(state)}</div>
//   );
// };
