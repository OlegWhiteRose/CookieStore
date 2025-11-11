import '../pages.scss';
import './AboutPage.scss';

import VerticalSection from '@components/templates/vertical-section/VerticalSection';
import AboutHero from '@/components/sections/about-hero/AboutHero';
import AboutHistory from '@/components/sections/about-history/AboutHistory';
import AboutMission from '@/components/sections/about-mission/AboutMission';
import AboutBenefits from '@/components/sections/about-benefits/AboutBenefits';
import AboutAssortment from '@/components/sections/about-assortment/AboutAssortment';

function AboutPage() {
    return (
        <VerticalSection className='page about-page'>
            <AboutHero />
            <AboutHistory />
            <AboutMission />
            <AboutBenefits />
            <AboutAssortment />
        </VerticalSection>
    )
}

export default AboutPage;

