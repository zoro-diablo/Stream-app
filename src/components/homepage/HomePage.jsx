/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, useRef } from 'react';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import { Link } from 'react-router-dom';
import Error from '../error/Error';
import Loader from '../loader/Loader';

const ScrollSection = React.forwardRef(({ title, movies = [] }, ref) => (
  <div className='mx-auto max-w-2xl px-4 py-2 lg:max-w-7xl lg:px-8'>
    <h2 className='font-semibold my-4 text-white ml-4'>{title}</h2>
    <div ref={ref} className='flex overflow-auto no-wrap scroll-container'>
      {movies.map((movie) => (
        <div key={movie._id} className='item flex px-4 text-white no-wrap'>
          <Link
            to={`/${title.includes('Shows') ? 'shows' : 'movies'}/${movie._id}`}
          >
            <div className='flex-none mr-4'>
              <img
                src={movie.poster_path}
                alt={movie.title}
                height={600}
                width={200}
                className='rounded-md hover:shadow-xl hover:shadow-white  transition-all duration-300 ease-in-out transform '
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
));

const HomePage = () => {
  const { data, isLoading, isError, error, isFetching } = useHomeFetch();

  const newMoviesScrollRef = useRef(null);
  const trendingMoviesScrollRef = useRef(null);
  const animationMovScrolls = useRef(null);
  const showsScrollTrending = useRef(null);
  const trendingMovieScrollRef = useRef(null);
  const movWatFreeScroll = useRef(null);
  const FamTimeScroll = useRef(null);
  const NewShwScroll = useRef(null);
  const NewAddScroll = useRef(null);
  const SciScroll = useRef(null);

  const setupHorizontalScroll = (ref) => {
    const handleWheel = (e) => {
      if (ref.current) {
        ref.current.scrollLeft += e.deltaY;
      }
    };

    ref.current?.addEventListener('wheel', handleWheel);

    return () => ref.current?.removeEventListener('wheel', handleWheel);
  };

  useEffect(() => {
    const cleanupFunctions = [
      setupHorizontalScroll(newMoviesScrollRef),
      setupHorizontalScroll(trendingMoviesScrollRef),
      setupHorizontalScroll(animationMovScrolls),
      setupHorizontalScroll(showsScrollTrending),
      setupHorizontalScroll(trendingMovieScrollRef),
      setupHorizontalScroll(movWatFreeScroll),
      setupHorizontalScroll(FamTimeScroll),
      setupHorizontalScroll(NewShwScroll),
      setupHorizontalScroll(NewAddScroll),
      setupHorizontalScroll(SciScroll),
    ];

    return () => cleanupFunctions.forEach((cleanup) => cleanup());
  }, []);

  if (isLoading) return <Loader />;
  if (isError) return <Error error={error} />;
  if (isFetching) return <Loader />;

  const sectionRefs = {
    'New Movies': newMoviesScrollRef,
    'Best Animation Movies': animationMovScrolls,
    'Most Trending Shows': showsScrollTrending,
    'Trending Movies': trendingMovieScrollRef,
    'Movies you can watch for Free': movWatFreeScroll,
    'Famility Time': FamTimeScroll,
    'New Shows': NewShwScroll,
    'Get a shot of adrenaline': NewAddScroll,
    'Sci-Fi TV': SciScroll,
  };

  const sections = Array.isArray(data?.data) ? data.data : [];

  return (
    <div className='bg-gradient-to-b from-black to-slate-950'>
      {sections.map((section, index) => {
        const ref = sectionRefs[section.title] || trendingMoviesScrollRef;
        return (
          <ScrollSection
            key={index}
            title={section.title}
            movies={section.movies || []}
            ref={ref}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
