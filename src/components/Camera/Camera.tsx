import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export const Camera = () => {
  const [data, setData] = useState(null);

  return (
    <>
      <QrReader
        onResult={(result: any, error: any) => {
          if (!!result) {
            setData(result?.text);
          }
        }}
        constraints={{
          facingMode: 'user'
        }}
        
      />
      {data ?
        <a href={data}>{data}</a> : 'No results'
      }
    </>
  );
};

// import { useState } from 'react';
// // @ts-ignore
// import QrReader from 'react-qr-scanner';

// export const Camera = () => {
//   const [state, setState] = useState<any>({
//     delay: 100,
//     result: 'No result'
//   });

//   const handleScan = (data: any) => {
//     setState({
//       result: data,
//     });
//   };
//   const handleError = (err: any) => {
//     console.error(err);
//   };

//   return (
//     <div>
//       <QrReader
//         delay={state.delay}
//         // style={previewStyle}
//         onError={handleError}
//         onScan={handleScan}
//       />
//       <p>{state.result}</p>
//     </div>
//   );
// };
