import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex w-[14rem] fixed h-full flex-col justify-between border-gray-700 border-e bg-gradient-to-b from-gray-900 to-black'>
      <div className='px-4 py-6 '>
        <Link to='/'>
          <span className='flex gap-2 items-center h-10 w-full place-content-center rounded-lg bg-gray-800 font-bold text-lg text-gray-200'>
            <img src='/logo.png' alt='zudo' className='w-6' />
            Zudo
          </span>
        </Link>
        <ul className='mt-6 space-y-1'>
          <li>
            <NavLink
              to='/'
              className='block rounded-lg  px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-600 hover:text-white'
            >
              Home Page
            </NavLink>
          </li>

          <li>
            <NavLink
              to='shows'
              className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-600 hover:text-white'
            >
              Shows
            </NavLink>
          </li>
          <li>
            <NavLink
              to='movies'
              className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-600 hover:text-white'
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='sticky inset-x-0 bottom-0 border-t border-gray-800'>
        <div className='flex items-center gap-2 bg-slate-950 p-4 hover:bg-gray-900'>
          <img
            alt='Man'
            src='https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png'
            className='h-10 w-10 rounded-full object-cover bg-gray-700'
          />
          <div>
            <p className='text-xs'>
              <strong className='block font-medium text-white'>Eric Who</strong>
              <span className='text-white'> dontmind@gmail.com </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
