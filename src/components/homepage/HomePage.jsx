import { useEffect, useRef } from 'react';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import { Link } from 'react-router-dom';
import Error from '../error/Error';
import Loader from '../loader/Loader';

const HomePage = () => {
  const { data, isLoading, isError, error } = useHomeFetch();
  const newMoviesScrollRef = useRef(null);
  const trendingMoviesScrollRef = useRef(null);
  const animationMovScrolls = useRef(null);
  const showsScrollTrending = useRef(null);

  const setupHorizontalScroll = (ref) => {
    const handleWheel = (e) => {
      if (!ref.current) return;
      ref.current.scrollLeft += e.deltaY;
    };

    const scrollContainer = ref.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  };

  useEffect(() => {
    const newMoviesCleanup = setupHorizontalScroll(newMoviesScrollRef);
    const animationMovScrollRef = setupHorizontalScroll(animationMovScrolls);
    const trendingMoviesCleanup = setupHorizontalScroll(
      trendingMoviesScrollRef
    );
    const trendingShowsCleanUp = setupHorizontalScroll(showsScrollTrending);

    return () => {
      newMoviesCleanup();
      trendingMoviesCleanup();
      animationMovScrollRef();
      trendingShowsCleanUp();
    };
  }, []);

  const newMovies = data?.data.filter((item) => item.title === 'New Movies');
  const animationMov = data?.data.filter(
    (item) => item.title === 'Best Animation Movies'
  );
  const trendingShows = data?.data.filter(
    (item) => item.title === 'Most Trending Shows'
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error error={error} />
      ) : (
        <div className='bg-gradient-to-b from-black to-slate-950'>
          <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h2 className='font-semibold my-4 text-white ml-4'>
              Trending Movies
            </h2>
            <div
              ref={trendingMoviesScrollRef}
              className='flex overflow-auto scroll-container'
            >
              {data?.data.map((item, index) => {
                if (item.title !== 'New Movies') {
                  return (
                    <div key={index} className='item flex px-4 text-white'>
                      <div className='flex '>
                        {item.movies.map((movie) => (
                          <div key={movie._id} className='flex-none mr-4'>
                            <img
                              src={movie.poster_path}
                              alt={movie.title}
                              height={600}
                              width={200}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className='mx-auto max-w-2xl px-4 py-2 lg:max-w-7xl lg:px-8'>
            <h2 className='font-semibold my-4 text-white ml-4'>New Movies</h2>
            <div
              ref={newMoviesScrollRef}
              className='flex overflow-auto scroll-container'
            >
              {newMovies?.map((item, index) => (
                <div key={index} className='item flex px-4 text-white'>
                  <div className='flex '>
                    {item.movies.map((movie) => (
                      <div key={movie._id} className='flex-none mr-4'>
                        <img
                          src={movie.poster_path}
                          alt={movie.title}
                          height={600}
                          width={200}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='mx-auto max-w-2xl px-4 py-2  lg:max-w-7xl lg:px-8'>
            <h2 className='font-semibold my-4 text-white ml-4'>
              Animation Movies
            </h2>
            <div
              ref={animationMovScrolls}
              className='flex overflow-auto scroll-container'
            >
              {animationMov?.map((item, index) => (
                <div key={index} className='item flex px-4 text-white'>
                  <div className='flex '>
                    {item.movies.map((movie) => (
                      <div key={movie._id} className='flex-none mr-4'>
                        <img
                          src={movie.poster_path}
                          alt={movie.title}
                          height={600}
                          width={200}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='mx-auto max-w-2xl px-4 py-2  lg:max-w-7xl lg:px-8'>
            <h2 className='font-semibold my-4 text-white ml-4'>
              Most Trending Shows
            </h2>
            <div
              ref={showsScrollTrending}
              className='flex overflow-auto scroll-container'
            >
              {trendingShows?.map((item, index) => (
                <div key={index} className='item flex px-4 text-white'>
                  <div className='flex '>
                    {item.movies.map((movie) => (
                      <div key={movie._id}>
                        <Link to={`/details/${movie._id}`}>
                          <div className='flex-none mr-4'>
                            <img
                              src={movie.poster_path}
                              alt={movie.title}
                              height={600}
                              width={200}
                            />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
