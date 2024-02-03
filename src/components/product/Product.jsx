import { useFetchData } from '../../hooks/useFetchData';

const Product = () => {
  const { data } = useFetchData();
  return (
    <div className='grid  grid-cols-5 gap-5 m-5 '>
      {data?.data.movies.map((movie) => (
        <div
          key={movie._id}
          className='shadow py-2 px-3 rounded-md bg-gradient-to-b from-slate-700 to-slate-950 '
        >
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
      ))}
    </div>
  );
};
export default Product;
