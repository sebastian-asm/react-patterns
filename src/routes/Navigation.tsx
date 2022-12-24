import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
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
              <NavLink to="/formik-yup" className={navActive}>
                Formik & Yup
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
