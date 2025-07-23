import { Link } from 'react-router-dom';

import './Header.scss';

import WaveBottom from '@components/wave/WaveBottom';
import LogoSmall from '@components/logo/LogoSmall';
import CartIcon from '@assets/icon/cart.svg?react';

function Header() {
    return (
        <header className="header">
            <div className="header__main">
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
                    <button className="header__main-personal__order-button">
                        <span>заказать</span>
                    </button>
                    <CartIcon className="header__main-personal__cart-icon" />
                </div>
            </div>
            <WaveBottom />
        </header>
    )
}

export default Header;

