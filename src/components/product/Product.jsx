import { Link } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetchData';
import Error from '../error/Error';
import { addItemtoFavorite, removeItemfromFavorite } from '../../redux/features/movieSlice';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../loader/Loader';

const Product = () => {
  const { data, isLoading, isError, error, isFetching } = useFetchData();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.fav); 

  const movies = data?.data?.movies ?? [];

  const isMovieFavorited = (movie) => {
    return favorites.some((fav) => fav._id === movie._id);
  };

  const toggleFavorite = (movie) => {
    if (isMovieFavorited(movie)) {
      dispatch(removeItemfromFavorite(movie._id));
    } else {
      dispatch(addItemtoFavorite(movie));
    }
  };

  return (
    <div className='relative m-5 h-full'> 
      <div className='grid grid-cols-5 gap-5'>
        {isLoading ? (<Loader />) : isError ? (
          <Error error={error} />
        ) : (
          movies.map((movie) => (
            <div key={movie._id} className='relative'>
              <div className='shadow py-2 px-3 rounded-md bg-gradient-to-b from-slate-700 to-slate-950 hover:shadow-md hover:shadow-white'>
                <img
                  src={isMovieFavorited(movie) ? '/start-on.png' : '/start-off.png'}
                  width={20}
                  className='absolute right-[15px] top-3 cursor-pointer'
                  alt='toggle-favorite.png'
                  onClick={() => toggleFavorite(movie)}
                />
                <Link to={`/shows/${movie._id}`}>
                  <img
                    alt={movie.original_title}
                    src={movie.backdrop_path}
                    className='h-[15rem] w-full rounded-md object-cover'
                  />
                </Link>
                <div className='mt-2'>
                  <dl>
                    <div>
                      <Link to={`/shows/${movie._id}`}>
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
        )}
      </div>
      {(isFetching) && (
        <img
          src='/loading.gif' 
          alt='Loading...'
          className='fixed bottom-10 right-10 text-white' 
          width={30} 
        />
      )}
    </div>
  );
};
export default Product;
