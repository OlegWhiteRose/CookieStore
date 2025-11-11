import './AboutHero.scss';

import SectionContent from '@/components/templates/section-content/SectionContent';

function AboutHero() {
    return (
        <SectionContent className="about-page__hero">
            <div className="about-page__hero-content">
                <h1 className="about-page__title">О нас</h1>
            </div>
        </SectionContent>
    );
}

export default AboutHero;
