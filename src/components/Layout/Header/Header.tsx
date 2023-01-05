import { NavLink } from 'react-router-dom';
import { appRoutesConfig } from '../../AppRoutes/AppRoutesConfig';
import { Offline } from '../../Offline';

export const Header = () => {
  return (
    <div className='header'>
      <div className='header-links'>
        {appRoutesConfig.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? 'link -active' : 'link'
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
      <div className='header-status'>
        <Offline />
      </div>
    </div>
  );
};
