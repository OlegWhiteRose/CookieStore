import './pages.scss';

import LogoBig from '@components/logo/LogoBig';
import FavoriteCookieTypes from '@/components/sections/favorite-cookie-types/FavoriteCookieTypes';
import Partners from '@/components/sections/partners/Partners';

function HomePage() {
    return (
        <div className="page home-page">
            <div className="home-page__logo-container">
                <LogoBig />
                <span className="home-page__logo-container__attention"> 
                    Печенье по самым лучшим ценам только для вас!
                </span>
            </div>
            <FavoriteCookieTypes />
            <Partners />
        </div>
    )
}

export default HomePage

