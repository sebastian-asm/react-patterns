import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

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
              <NavLink to="/home" className={navActive}>
                Home
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
          <Route path="/home" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/users" element={<h1>Users Page</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
