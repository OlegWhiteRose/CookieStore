import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '@layouts/MainLayout';
import HomePage from '@pages/HomePage';
import MenuPage from '@pages/MenuPage';
import AboutPage from '@pages/AboutPage';
import ContactsPage from '@pages/ContactsPage';
import FeedbackPage from '@pages/FeedbackPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

