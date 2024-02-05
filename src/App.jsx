import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import RootLayout from './layout/RootLayout';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import ProductDetails from './components/product/ProductDetails';
import ProductMovDetails from './components/product/ProductMovDetails';
import HomePage from './components/homepage/HomePage';
import ProductMovie from './components/product/ProductMovie';
import Product from './components/product/Product';
import MoviesLayout from './layout/MoviesLayout';
import ShowLayout from './layout/ShowLayout';
import RouteError from './components/error/RouteError';
import NotFoundPage from './components/error/NotFoundPage';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<RouteError />}>
      <Route index element={<HomePage />} />
      <Route path='shows' element={<ShowLayout />}>
        <Route index element={<Product />} />
        <Route path=':movieId' element={<ProductDetails />} />
      </Route>
      <Route path='movies' element={<MoviesLayout />}>
        <Route index element={<ProductMovie />} />
        <Route path=':videoId' element={<ProductMovDetails />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
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
