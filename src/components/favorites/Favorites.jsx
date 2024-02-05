import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItemfromFavorite } from '../../redux/features/movieSlice';
import { useDispatch } from 'react-redux';
import NoFav from '../error/NoFav';

const Favorites = () => {
  const dispatch = useDispatch();
  const { fav } = useSelector((state) => state.favorites);
  return (
    <div className='grid grid-cols-5 gap-5 m-5'>
      {fav.length > 0 ? (
        fav?.map((movie) => (
          <div key={movie._id} className='relative'>
            <div className='shadow py-2 px-3 rounded-md bg-gradient-to-b from-slate-700 to-slate-950 hover:shadow-md hover:shadow-white'>
              <img
                src='/close.png'
                width={20}
                className='absolute right-[15px] top-3 cursor-pointer'
                alt='close.png'
                onClick={() => dispatch(removeItemfromFavorite(movie._id))}
              />
              <Link
                to={
                  movie.contentType === 'show'
                    ? `/shows/${movie._id}`
                    : `/movies/${movie._id}`
                }
              >
                <img
                  alt='Home'
                  src={movie.backdrop_path}
                  className='h-[15rem] w-full rounded-md object-cover '
                />
              </Link>
              <div className='mt-2'>
                <dl>
                  <div>
                    <Link
                      to={
                        movie.contentType === 'show'
                          ? `/shows/${movie._id}`
                          : `/movies/${movie._id}`
                      }
                    >
                      <dd className='font-medium text-gray-300 text-sm flex items-center h-full'>
                        {movie.original_title}
                      </dd>
                    </Link>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        ))
      ) : (
        <NoFav />
      )}
    </div>
  );
};
export default Favorites;
