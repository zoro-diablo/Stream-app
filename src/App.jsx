import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import RootLayout from './layout/RootLayout';
import Home from './routes/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import ProductDetails from './components/product/ProductDetails';
import Shows from './routes/Shows';
import Movies from './routes/Movies';
import ProductMovDetails from './components/product/ProductMovDetails';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='shows' element={<Shows />} />
      <Route path='movies' element={<Movies />} />
      <Route path='shows/:movieId' element={<ProductDetails />} />
      <Route path='movies/:videoId' element={<ProductMovDetails />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools position='bottom-right' />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
