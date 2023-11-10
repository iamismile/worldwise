import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import City from './components/City';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import Form from './components/Form';
import AppLayout from './pages/AppLayout';
import Homepage from './pages/Homepage';
import LoginPage from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import PricingPage from './pages/Pricing';
import ProductPage from './pages/Product';
import { CitiesProvider } from './contexts/CitiesContext';

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
