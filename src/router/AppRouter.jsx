import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import {
  HeroesRoutes,
  HeroesRoutesLayout,
} from '../heroes/routes/HeroesRoutes';

export const router = createBrowserRouter([
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <HeroesRoutesLayout />,
    children: HeroesRoutes,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
