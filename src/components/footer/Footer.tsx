import { Link } from 'react-router-dom';

import './Footer.scss';

import LogoSmall from '@components/logo/LogoSmall';
import SectionContent from '../templates/section-content/SectionContent';
import HorizontalSection from '../templates/horizontal-section/HorizontalSection';

function Footer() {
    return (
        <footer className="footer">
            <HorizontalSection>
                <SectionContent className="footer__content">
                    <LogoSmall />

                    <div className="footer__content-links">
                        <Link to="/contacts#about">
                            <span>обратная связь</span>
                        </Link>
                        <Link to="/contacts#contacts">
                            <span>контакты</span>
                        </Link>
                    </div>

                    <div className="footer__content-watermark">
                        <span>2025 «СoоkieStore»</span>
                        <span>Все права защищены</span>
                    </div>
                </SectionContent>
            </HorizontalSection>
        </footer>
    )
}

export default Footer;

