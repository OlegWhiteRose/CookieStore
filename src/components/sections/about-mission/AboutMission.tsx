import './AboutMission.scss';

import SectionContent from '@/components/templates/section-content/SectionContent';

function AboutMission() {
    return (
        <SectionContent className="about-page__section about-page__section--highlight">
            <div className="about-page__mission-content">
                <h2 className="about-page__section-title">Наша миссия</h2>
                <p className="about-page__text about-page__text--large">
                    Мы создаем печенье, которое дарит радость и уют. Каждое печенье — это частичка тепла 
                    и заботы, переданная из наших рук в ваши. Наша цель — делать людей счастливее через 
                    простые, но важные моменты: чаепитие с семьей, сладкий перекус на работе, 
                    подарок близким или просто минута удовольствия для себя.
                </p>
                <p className="about-page__text about-page__text--large">
                    Мы верим, что качественная выпечка способна создавать особую атмосферу и объединять людей. 
                    Именно поэтому каждый день мы вкладываем душу в каждое печенье, используя только лучшие 
                    ингредиенты и проверенные рецепты. Ваша улыбка — лучшая награда за нашу работу.
                </p>
            </div>
        </SectionContent>
    );
}

export default AboutMission;
