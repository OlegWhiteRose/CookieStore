import './OurAdvantages.scss';

import AdvantageForm from '@/components/forms/advantage-form/AdvantageForm';
import SectionContent from '@/components/templates/section-content/SectionContent';
import VerticalSection from '@/components/templates/vertical-section/VerticalSection';

const ADVANTAGES = [
    {
        title: 'Натуральное производство',
        description: 'Мы используем только отборные ингредиенты без добавок и искусственных ароматизаторов'
    },
    {
        title: 'Широкий выбор печенья',
        description: 'Найдите печенье на любой вкус только у нас'
    },
    {
        title: 'Доставка по всей стране',
        description: 'Быстро доставим ваше любимое печенье, где бы вы не находились'
    }
];

function OurAdvantages() {
    return (
        <VerticalSection className="our-advantages">
            <SectionContent>
                <h1 className="our-advantages__title">Наши преимущества</h1>
            </SectionContent>
            <SectionContent className="our-advantages__content">
                <AdvantageForm
                    title={ADVANTAGES[0].title}
                    description={ADVANTAGES[0].description}
                    className="our-advantages__card--main"
                />
                <AdvantageForm
                    title={ADVANTAGES[1].title}
                    description={ADVANTAGES[1].description}
                    className="our-advantages__card--left"
                />
                <AdvantageForm
                    title={ADVANTAGES[2].title}
                    description={ADVANTAGES[2].description}
                    className="our-advantages__card--right"
                />
            </SectionContent>
        </VerticalSection>
    );
}

export default OurAdvantages;

