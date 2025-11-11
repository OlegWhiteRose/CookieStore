import { useNavigate } from 'react-router-dom';

import './LogoSmall.scss';

import LogoIcon from '@assets/icon/cookie-logo-small.svg?react';

function LogoSmall() {
    const navigate = useNavigate();

    return (
        <div className="logo-small" onClick={() => navigate('/')}>   
            <div className="logo-small__img">
                <LogoIcon />
            </div>
            <span className="logo-small__text">CookieStore</span>
        </div>
    )
}

export default LogoSmall;

