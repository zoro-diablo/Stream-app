import { Outlet } from 'react-router-dom';

const FavLayout = () => {
  return (
    <div className='h-screen'>
      <h2 className='font-semibold my-4 text-white ml-8'>Favorites</h2>
      <Outlet />
    </div>
  );
};
export default FavLayout;
