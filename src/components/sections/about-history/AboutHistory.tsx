import './AboutHistory.scss';

import SectionContent from '@/components/templates/section-content/SectionContent';
import CookieStoreImage from '@/assets/img/cookiestore.png';

function AboutHistory() {
    return (
        <SectionContent className="about-page__section">
            <h2 className="about-page__section-title">Наша история</h2>
            <div className="about-page__history-content">
                <p className="about-page__text about-page__text--intro about-page__history-intro">
                    Создаем печенье с любовью с 2015 года
                </p>
                <div className="about-page__history-image">
                    <img src={CookieStoreImage} alt="Витрина магазина CookieStore" />
                </div>
                <div className="about-page__history-text">
                    <p className="about-page__text">
                        <strong>CookieStore</strong> начался как небольшая семейная пекарня в самом сердце города. 
                        То, что начиналось как хобби, превратилось в нашу страсть — создавать вкусное и качественное 
                        печенье по традиционным рецептам.
                    </p>
                    <p className="about-page__text">
                        За годы работы мы расширили ассортимент, добавили уникальные вкусы и начали доставлять 
                        наше печенье по всей стране. Но одно осталось неизменным — наше стремление к качеству 
                        и забота о каждом клиенте.
                    </p>
                </div>
            </div>
        </SectionContent>
    );
}

export default AboutHistory;
