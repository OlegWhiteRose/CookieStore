import { Link, useNavigate, useLocation } from 'react-router-dom';
import './MobileMenu.scss';

import CloseIcon from '@assets/icon/close-bold.svg?react';
import OrderButton from '@components/elements/buttons/order-button/OrderButton';

export interface MobileMenuProps {
    onClose: () => void;
}

const getPageTitle = (pathname: string): string => {
    if (pathname.startsWith('/menu')) return 'Меню';
    if (pathname.startsWith('/about')) return 'О нас';
    if (pathname.startsWith('/contacts')) return 'Контакты';
    if (pathname.startsWith('/order')) return 'Оформление заказа';
    if (pathname === '/') return 'Главная';
    return 'CookieStore';
};

function MobileMenu({ onClose }: MobileMenuProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLinkClick = () => {
        onClose();
    };

    const handleOrderClick = () => {
        navigate('/order?mode=order');
        onClose();
    };

    return (
        <div className="mobile-menu">
            <div className="mobile-menu__header">
                <span className="mobile-menu__title">{getPageTitle(location.pathname)}</span>
                <button className="mobile-menu__close" onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>

            <nav className="mobile-menu__nav">
                <Link to="/menu" className="mobile-menu__link" onClick={handleLinkClick}>
                    <span>Меню</span>
                </Link>
                <Link to="/about" className="mobile-menu__link" onClick={handleLinkClick}>
                    <span>О нас</span>
                </Link>
                <Link to="/contacts#contacts" className="mobile-menu__link" onClick={handleLinkClick}>
                    <span>Контакты</span>
                </Link>
                <Link to="/contacts#about" className="mobile-menu__link" onClick={handleLinkClick}>
                    <span>Обратная связь</span>
                </Link>

                <OrderButton 
                    text="заказать"
                    onClick={handleOrderClick}
                />
            </nav>
        </div>
    );
}

export default MobileMenu;
