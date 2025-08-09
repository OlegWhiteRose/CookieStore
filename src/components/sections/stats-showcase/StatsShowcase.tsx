import './StatsShowcase.scss';

import StatsShowcaseForm from '@/components/forms/stats-showcase-form/StatsShowcaseForm';
import SectionContent from '@/components/templates/section-content/SectionContent';
import VerticalSection from '@/components/templates/vertical-section/VerticalSection';


const STATS = [
    {
        number: '12408',
        description: 'кг печенья продано',
    },
    {
        number: '1000+',
        description: 'клиентов ежегодно',
    },
    {
        number: '3255',
        description: 'положительных отзывов',
    },
]

function StatsShowcase() {
    return (
        <VerticalSection className="stats-showcase">
            <SectionContent>
                <h1 className="stats-showcase__title">Цифры говорят сами за себя</h1>
            </SectionContent>
            <SectionContent className="stats-showcase__content">
                { STATS.map((stat) => (
                    <StatsShowcaseForm key={stat.number} number={stat.number} description={stat.description} />
                )) }
            </SectionContent>
        </VerticalSection>
    );
}

export default StatsShowcase;

