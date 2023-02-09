import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from '../../ui/components/NavBar';
import { DcPage, MarvelPage, SearchPage, HeroPage } from '../pages';

export const HeroesRoutesLayout = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export const HeroesRoutes = [
  {
    path: 'marvel',
    element: <MarvelPage />,
  },
  {
    path: 'dc',
    element: <DcPage />,
  },
  {
    path: 'search',
    element: <SearchPage />,
  },
  {
    path: 'hero/:id',
    element: <HeroPage />,
  },
  {
    path: '/*',
    element: <Navigate to={'marvel'} />,
  },
];
