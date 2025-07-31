import './OurAdvantages.scss';

import AdvantageForm from '@/components/forms/advantage-form/AdvantageForm';

import Truck from '@assets/img/advantages/truck.png';
import CookiesBox from '@assets/img/advantages/cookies-box.png';
import Grass from '@assets/img/advantages/grass.png';
import Money from '@assets/img/advantages/money.png';

function OurAdvantages() {
    const advantages = [
        {
            backgroundImgSrc: Truck,
            description: 'Доставка по всей стране',
        },
        {
            backgroundImgSrc: CookiesBox,
            description: 'Широкий выбор печенья',
        },
        {
            backgroundImgSrc: Grass,
            description: 'Натуральное производство',
        },
        {
            backgroundImgSrc: Money,
            description: 'Честная цена',
        },
    ];

    return (
        <div className="our-advantages">
            <h1 className="our-advantages__title">Наши преимущества</h1>
            <div className="our-advantages__content">
                { advantages.map((advantage) => (
                    <AdvantageForm key={advantage.description} 
                        backgroundImgSrc={advantage.backgroundImgSrc} 
                        description={advantage.description} 
                    />
                )) }
            </div>
        </div>
    );
}

export default OurAdvantages;

