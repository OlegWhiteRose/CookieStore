import './StatsShowcase.scss';

import StatsShowcaseForm from '@/components/forms/stats-showcase-form/StatsShowcaseForm';

function StatsShowcase() {
    const stats = [
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
    ];

    return (
        <div className="stats-showcase">
            <h1 className="stats-showcase__title">Цифры говорят сами за себя</h1>
            <div className="stats-showcase__content">
                { stats.map((stat) => (
                    <StatsShowcaseForm key={stat.number} number={stat.number} description={stat.description} />
                )) }
            </div>
        </div>
    );
}

export default StatsShowcase;

