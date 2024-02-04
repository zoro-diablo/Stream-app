import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () => {
  return (
    <Box minHeight='100vh' className='w-[80vw]'>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        height='80vh'
      >
        <CircularProgress />
      </Stack>
    </Box>
  );
};
export default Loader;
