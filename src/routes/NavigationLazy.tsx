import { Suspense } from 'react';

import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { routes } from '../routes/routes';

import logo from '../assets/react.svg';

export const NavigationLazy = () => {
  const navActive = ({ isActive }: any) => (isActive ? 'nav-active' : '');

  return (
    // con Suspense le indicamos a React que haga algo mientras carga un componente
    // fallback puede recibir null
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="Logo React" />
            <ul>
              {routes.map(({ name, to }) => (
                <li key={name}>
                  <NavLink to={to} className={navActive}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ name, path, Component }) => (
              <Route key={name} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
