import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import ProductDetails from './components/product/ProductDetails';
import ProductMovDetails from './components/product/ProductMovDetails';
import HomePage from './components/homepage/HomePage';
import ProductMovie from './components/product/ProductMovie';
import Product from './components/product/Product';
import RouteError from './components/error/RouteError';
import NotFoundPage from './components/error/NotFoundPage';
import Favorites from './components/favorites/Favorites';
// Layouts
import RootLayout from './layout/RootLayout';
import MoviesLayout from './layout/MoviesLayout';
import ShowLayout from './layout/ShowLayout';
import FavLayout from './layout/FavLayout';

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
      <Route path='favorites' element={<FavLayout />}>
        <Route index element={<Favorites />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position='bottom-right'
          theme='dark'
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
        <RouterProvider router={router} />
        <ReactQueryDevtools position='bottom-right' />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
