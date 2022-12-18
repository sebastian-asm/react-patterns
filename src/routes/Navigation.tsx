import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

import logo from '../assets/react.svg';

export const Navigation = () => {
  const navActive = ({ isActive }: any) => (isActive ? 'nav-active' : '');

  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo React" />
          <ul>
            <li>
              <NavLink to="/" className={navActive}>
                Shopping Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navActive}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={navActive}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/users" element={<h1>Users Page</h1>} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
