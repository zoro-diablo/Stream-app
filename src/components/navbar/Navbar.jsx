import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex w-[14rem] fixed h-full flex-col justify-between border-gray-700 border-e bg-gradient-to-b from-gray-900 to-black'>
      <div className='px-4 py-6 '>
        <span className='flex gap-2 items-center h-10 w-full place-content-center rounded-lg bg-gray-800 font-bold text-lg text-gray-200'>
          <img src='/logo.png' alt='zudo' className='w-6' />
          Zudo
        </span>
        <ul className='mt-6 space-y-1'>
          <li>
            <NavLink
              to='/'
              className='block rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-400'
            >
              Home Page
            </NavLink>
          </li>
          {/* <li>
            <details className='group [&_summary::-webkit-details-marker]:hidden'>
              <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-400 hover:bg-gray-600 hover:text-gray-700'>
                <span className='text-sm font-medium'> Teams </span>
                <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <to
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
              </summary>
              <ul className='mt-2 space-y-1 px-4'>
                <li>
                  <a
                    href=''
                    className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-600 hover:text-gray-700'
                  >
                    Banned Users
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-600 hover:text-gray-700'
                  >
                    Calendar
                  </a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <NavLink
              to='/shows'
              className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-600 hover:text-gray-700'
            >
              Shows
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/movies'
              className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-600 hover:text-gray-700'
            >
              Movies
            </NavLink>
          </li>
          {/* <li>
            <details className='group [&_summary::-webkit-details-marker]:hidden'>
              <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-400 hover:bg-gray-600 hover:text-gray-700'>
                <span className='text-sm font-medium'> Account </span>
                <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <to
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
              </summary>
              <ul className='mt-2 space-y-1 px-4'>
                <li>
                  <a
                    href=''
                    className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-600 hover:text-gray-700'
                  >
                    Details
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-600 hover:text-gray-700'
                  >
                    Security
                  </a>
                </li>
                <li>
                  <form action='/logout'>
                    <button
                      type='submit'
                      className='w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-400 [text-align:_inherit] hover:bg-gray-600 hover:text-gray-700'
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li> */}
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
