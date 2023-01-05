import { Route, Routes } from 'react-router-dom';

import { appRoutesConfig } from './AppRoutesConfig';

export const AppRoutes = () => {
  return (
    <Routes>
      {appRoutesConfig.map(({ path, Component }) => (
        <Route
          index={true}
          key={path}
          path={path}
          element={<Component />}
        />
      ))}
    </Routes>
  );
};
