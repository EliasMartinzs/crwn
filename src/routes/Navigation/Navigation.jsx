import { Link, Outlet } from 'react-router-dom';

import './Navigation.scss';
import Crwn from '../../assets/crown.svg';

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Crwn} alt="" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign-In
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
