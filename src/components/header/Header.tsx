import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '@/store';

import './Header.scss';

import SectionContent from '../templates/section-content/SectionContent';
import HorizontalSection from '../templates/horizontal-section/HorizontalSection';
import OrderButton from '@components/elements/buttons/order-button/OrderButton';
import SideDrawer from '../templates/side-drawer/SideDrawer';
import MobileMenu from '../sections/mobile-menu/MobileMenu';

import LogoSmall from '@components/logo/LogoSmall';
import CartIcon from '@assets/icon/cart.svg?react';
import MenuIcon from '@assets/icon/menu.svg?react';
import WaveBottom from '../wave/WaveBottom';

function Header() {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const totalCount = useSelector((state: RootState) => 
        state.draft.cookies.reduce((sum, cookie) => sum + cookie.quantity, 0)
    );

    const handleOrderClick = () => {
        navigate('/order?mode=order');
    };

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuClose = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <header className="header">
                <HorizontalSection>
                    <SectionContent className="header__main">
                        <LogoSmall />

                        <div className="header__main-links">
                            <Link to="/menu">
                                <span>меню</span>
                            </Link>
                            <Link to="/about">
                                <span>о нас</span>
                            </Link>
                            <Link to="/contacts">
                                <span>контакты</span>
                            </Link>
                        </div>

                        <div className="header__main-personal">
                            <OrderButton 
                                text="заказать"
                                onClick={handleOrderClick}
                            />
                            <Link to="/order?mode=cart" className="header__main-personal__cart-icon">
                                <CartIcon />
                                {totalCount > 0 && (
                                    <div>
                                        <span>{totalCount}</span>
                                    </div>
                                )}
                            </Link>
                        </div>

                        <div className="header__main-mobile-controls">
                            <Link to="/order?mode=cart" className="header__main-mobile-controls__cart-icon">
                                <CartIcon />
                                {totalCount > 0 && (
                                    <div>
                                        <span>{totalCount}</span>
                                    </div>
                                )}
                            </Link>
                            <button 
                                className="header__main-burger" 
                                onClick={handleMenuToggle}
                                aria-label="Открыть меню"
                            >
                                <MenuIcon />
                            </button>
                        </div>
                    </SectionContent>
                </HorizontalSection>
            </header>
            <WaveBottom />

            <SideDrawer isOpen={isMobileMenuOpen} onClose={handleMenuClose}>
                <MobileMenu onClose={handleMenuClose} />
            </SideDrawer>
        </div>
    )
}

export default Header;

