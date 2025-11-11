import { useStatsShowcase } from '@/hooks/useStatsShowcase';

import './StatsShowcase.scss';

import StatsShowcaseForm from '@/components/forms/stats-showcase-form/StatsShowcaseForm';
import SectionContent from '@/components/templates/section-content/SectionContent';
import VerticalSection from '@/components/templates/vertical-section/VerticalSection';

function StatsShowcase() {
    const { stats, loading, error } = useStatsShowcase();

    if (loading || error) {
        return <></>;
    }

    return (
        <VerticalSection className="stats-showcase">
            <SectionContent>
                <h1 className="stats-showcase__title">Цифры говорят сами за себя</h1>
            </SectionContent>
            <SectionContent className="stats-showcase__content">    
                { stats.map((stat) => (
                    <StatsShowcaseForm key={stat.number} number={stat.number} description={stat.description} />
                )) }
            </SectionContent>
        </VerticalSection>
    );
}

export default StatsShowcase;

