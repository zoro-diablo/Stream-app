/* eslint-disable react/prop-types */

const Error = ({ error }) => {
  return (
    <div className='flex justify-center items-center h-[100vh] w-[80vw] my-auto opacity-50 flex-col bg-slate-950'>
      <h2 className='font-bold text-xl py-2 text-white'>Error Occurred</h2>
      <p className='text-red-500'>{error.message}</p>
    </div>
  );
};
export default Error;
