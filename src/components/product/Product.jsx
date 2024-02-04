import { Link } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetchData';
import Error from '../error/Error';
import Loader from '../loader/Loader';

const Product = () => {
  const { data, isLoading, isError, error } = useFetchData();

  // Check if movies data is available before trying to render it
  const movies = data?.data?.movies ?? [];

  return (
    <div className='grid grid-cols-5 gap-5 m-5'>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error error={error} />
      ) : (
        movies.map((movie) => (
          <div key={movie._id}>
            <Link to={`/shows/${movie._id}`}>
              <div className='shadow py-2 px-3 rounded-md bg-gradient-to-b from-slate-700 to-slate-950 hover:shadow-md hover:shadow-white'>
                <img
                  alt='Home'
                  src={movie.backdrop_path}
                  className='h-[15rem] w-full rounded-md object-cover '
                />
                <div className='mt-2'>
                  <dl>
                    <div>
                      <dd className='font-medium text-gray-300 text-sm flex items-center h-full'>
                        {movie.original_title}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};
export default Product;
