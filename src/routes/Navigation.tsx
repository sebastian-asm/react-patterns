import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
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
              <NavLink to="/register" className={navActive}>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={navActive}>
                Formik Basic
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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/users" element={<h1>Users Page</h1>} />
          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
