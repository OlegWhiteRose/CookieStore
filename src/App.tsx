import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '@layouts/MainLayout';
import HomePage from '@/pages/home/HomePage';
import MenuPage from '@/pages/menu/MenuPage';
import AboutPage from '@/pages/about/AboutPage';
import ContactsPage from '@/pages/contact/ContactsPage';
import GoodPage from '@/pages/good/GoodPage';
import OrderPage from '@/pages/order/OrderPage';
import ScrollToTop from '@/components/scroll-to-top/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/good/:id" element={<GoodPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

