import { Outlet } from 'react-router-dom';

const ShowLayout = () => {
  return (
    <div>
        <h2 className='font-semibold my-4 text-white ml-8'>Shows</h2>
      <Outlet />
    </div>
  );
};
export default ShowLayout;
