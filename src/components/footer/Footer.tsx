import { Link } from 'react-router-dom';

import './Footer.scss';

import LogoSmall from '@components/logo/LogoSmall';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <LogoSmall />

                <div className="footer__content-links">
                    <Link to="/feedback">
                        <span>обратная связь</span>
                    </Link>
                    <Link to="/contacts">
                        <span>контакты</span>
                    </Link>
                </div>

                <div className="footer__content-watermark">
                    <span>2025 «СoоkieStore»</span>
                    <span>Все права защищены</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

