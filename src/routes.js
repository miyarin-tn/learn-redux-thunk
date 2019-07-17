import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/products',
    exact: true,
    component: ProductListPage
  },
  {
    path: '/products/add',
    exact: false,
    component: ProductActionPage
  },
  {
    path: '/products/:id/edit',
    exact: false,
    component: ProductActionPage
  },
  {
    path: '',
    exact: false,
    component: NotFoundPage
  }
]

export default routes;