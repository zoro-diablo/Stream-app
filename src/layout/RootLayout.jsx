import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';


const RootLayout = () => {
  return (
    <div className='flex'>
    
      <div className='w-[16rem]'>
        <Navbar />
      </div>
      <div className='w-full bg-[#010203]'>
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
