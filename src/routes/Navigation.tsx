import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import {
  DynamicFormPage,
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from '../03-forms/pages';

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
            <li>
              <NavLink to="/formik-components" className={navActive}>
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" className={navActive}>
                Formik Abstraction
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" className={navActive}>
                Formik Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={navActive}>
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abstraction" element={<FormikAbstraction />} />
          <Route path="/formik-register" element={<RegisterFormikPage />} />
          <Route path="/dynamic-form" element={<DynamicFormPage />} />
          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
