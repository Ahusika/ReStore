import { createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/ContactPage';
import HomePage from '../../features/catalog/home/HomePage';
import AboutPage from '../../features/catalog/about/AboutPage';

export const router = createBrowserRouter(([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'catalog', element: <Catalog />},
            {path: 'catalog/:id', element: <ProductDetails />},
            {path: 'about', element: <AboutPage />},
            {path: 'contact', element: <ContactPage />},
        ]
    }
]))