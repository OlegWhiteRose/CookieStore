import { Outlet } from 'react-router-dom';

import './layouts.scss';

import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';

function MainLayout() {
  return (
    <div className="layout main-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout;

