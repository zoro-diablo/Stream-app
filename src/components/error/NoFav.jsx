/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

const NoFav = () => {
  return (
    <div className='grid h-[80vh] w-[75vw] place-content-center  px-4'>
      <div className='text-center'>
        <h1 className='text-9xl font-black text-gray-200'>0</h1>

        <p className='text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl'>
          No Favorites found !
        </p>

        <p className='mt-4 text-gray-500 text-bold '>
          Browse more movies & shows from HomePage
        </p>

        <Link
          to='/'
          className='mt-6 inline-block rounded bg-gray-950 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring'
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
export default NoFav;
