import { Link } from 'react-router-dom';

import './Header.scss';

import SectionContent from '../templates/section-content/SectionContent';
import HorizontalSection from '../templates/horizontal-section/HorizontalSection';
import { OrderButton } from '@components/elements/buttons/buttons';

import WaveBottom from '@components/wave/WaveBottom';
import LogoSmall from '@components/logo/LogoSmall';
import CartIcon from '@assets/icon/cart.svg?react';

function Header() {
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
                                onClick={() => console.log('Order clicked')}
                                className="header__main-personal__order-button"
                            />
                            <CartIcon className="header__main-personal__cart-icon" />
                        </div>
                    </SectionContent>
                </HorizontalSection>
            </header>
            <WaveBottom />
        </div>
    )
}

export default Header;

