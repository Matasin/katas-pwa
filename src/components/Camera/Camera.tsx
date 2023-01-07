import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export const Camera = () => {
  const [data, setData] = useState(null);

  return (
    <>
      <QrReader
        onResult={(result: any) => {
          if (!!result) {
            setData(result?.text);
          }
        }}
        constraints={{
          facingMode: {
            exact: 'environment'
          }
        }}
      />
      {data ?
        <a className='row' href={data}>{data}</a> : 'No results'
      }
    </>
  );
};
