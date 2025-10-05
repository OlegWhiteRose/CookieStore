import './OurAdvantages.scss';

import AdvantageForm from '@/components/forms/advantage-form/AdvantageForm';
import SectionContent from '@/components/templates/section-content/SectionContent';
import VerticalSection from '@/components/templates/vertical-section/VerticalSection';

import NaturalProduction from '@assets/img/advantages/natural-production.png';
import WideChoice from '@assets/img/advantages/wide-choice.png';
import CountryDelivery from '@assets/img/advantages/country-delivery.png';

const ADVANTAGES = [
    {
        title: 'Натуральное производство',
        description: 'Мы используем только отборные ингредиенты без добавок и искусственных ароматизаторов',
        classname: 'our-advantages__card--main',
        imgSrc: NaturalProduction,
        size: [500, 300] as [number, number],
        right: -50,
        bottom: -10,
    },
    {
        title: 'Широкий выбор печенья',
        description: 'Найдите печенье на любой вкус только у нас',
        classname: 'our-advantages__card--left',
        imgSrc: WideChoice,
        size: [180, 170] as [number, number]
    },
    {
        title: 'Доставка по всей стране',
        description: 'Быстро доставим ваше любимое печенье, где бы вы не находились',
        classname: 'our-advantages__card--right',
        imgSrc: CountryDelivery,
        size: [180, 190] as [number, number]
    }
];

function OurAdvantages() {
    return (
        <VerticalSection className="our-advantages">
            <SectionContent>
                <h1 className="our-advantages__title">Наши преимущества</h1>
            </SectionContent>
            <SectionContent className="our-advantages__content">
                {ADVANTAGES.map((advantage) =>
                    <AdvantageForm
                        title={advantage.title}
                        description={advantage.description}
                        className={advantage.classname}
                        imgSrc={advantage.imgSrc}
                        size={advantage.size || undefined}
                        bottom={advantage.bottom || undefined}
                        right={advantage.right || undefined}
                    />
                )}
            </SectionContent>
        </VerticalSection>
    );
}

export default OurAdvantages;

