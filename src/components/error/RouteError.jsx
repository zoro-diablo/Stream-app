import { useRouteError } from "react-router-dom";

const RouteError = () => {
  const error = useRouteError(); 
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw] my-auto opacity-50 flex-col'>
      <h2 className='font-bold text-xl py-2 text-white'>Error Occurred</h2>
      <p className='text-red-500'>{error.message}</p>
    </div>
  );
};

export default RouteError;
