import { useParams } from 'react-router-dom';
import { useFetchDetailsMov } from '../../hooks/useFetchDetailsMov';
import ReactPlayer from 'react-player';
import Loader from '../loader/Loader';
import Error from '../error/Error';


const ProductMovDetails = () => {
  const { videoId } = useParams();
  const { data, isLoading, isError, error } = useFetchDetailsMov(videoId);
  return (
    <div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : isError ? (
        <div>
          <Error error={error} />
        </div>
      ) : (
        <div className='m-5 bg-gradient-to-br from-slate-950 to-slate-800'>
          <div className='flex justify-between mx-10'>
            <div className=''>
              <h1 className='text-[50px] font-bold text-gray-300 mx-5 mt-5 mb-2'>
                {data?.movie.original_title}
              </h1>
              <div className='text-gray-300 text-md ml-5 flex items-center'>
                {data?.movie.first_aired}
                <div className='ml-3 my-2 flex gap-4'>
                  <div className='flex gap-2'>
                    <img
                      width='24'
                      height='24'
                      src='https://img.icons8.com/fluency/48/star--v2.png'
                      alt='star--v2'
                    />
                    <span className='text-white text-md my-auto'>
                      {data?.movie.vote_average}
                    </span>
                  </div>
                  <div className='flex gap-2'>
                    <img
                      width='24'
                      height='24'
                      src='https://img.icons8.com/3d-fluency/94/thumb-up--v1.png'
                      alt='check-mark-button-emoji'
                    />
                    <span className='text-white text-md my-auto'>
                      {data?.movie.vote_count}
                    </span>
                  </div>
                 
                </div>
              </div>

              <div className='my-5 ml-2'>
                {data?.movie.genres.map((genre, index) => (
                  <span
                    key={index}
                    className='text-gray-300 text-md  mx-2 bg-gray-800 p-1 px-4 rounded-2xl'
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <p className='text-gray-300 text-md pt-4 m-5 w-[600px]'>
                {data?.movie.overview}
              </p>
            </div>
            <img
              alt='Home'
              src={data?.movie.backdrop_path}
              className='h-[420px] w-[530px] mt-2 rounded-md'
            />
          </div>
          <div className=' flex'>
            <div>
              <div>
                <h1 className='text-[25px] font-semibold text-gray-300 mx-5 pl-5 mt-5'>
                  Trailer
                </h1>
              </div>
              <div className='font-medium text-gray-300 text-sm flex items-center my-4  ml-10'>
                <ReactPlayer url={data?.movie.youtube_trailer} controls />
              </div>
            </div>
            <div>
              <div>
                <div>
                  <h1 className='text-[25px] font-semibold text-gray-300 mx-5 pl-5 mt-5'>
                    Source
                  </h1>
                </div>
                <div className='grid-cols-3 gap-1 grid mt-2 mx-4 text-white'>
                  {data?.movie.sources.map((source, index) => (
                    <div key={index} className='bg-gray-950 hover:bg-gray-900'>
                      <div href={source.info}>
                        <div
                          style={{
                            margin: '10px',
                            padding: '10px',
                          }}
                        >
                          <h2>{source.display_name}</h2>
                          <p>Type: {source.type}</p>
                          <p>
                            <a href={source.link} className='text-blue-300'>
                              Watch on {source.display_name}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductMovDetails;
