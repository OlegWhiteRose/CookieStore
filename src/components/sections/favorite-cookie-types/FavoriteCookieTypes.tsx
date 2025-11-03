import './FavoriteCookieTypes.scss';

import TopWave from '@components/wave/WaveTop';
import BottomWave from '@components/wave/WaveBottom';
import TypeForm from '@components/forms/type-form/TypeForm';
import SectionContent from '@/components/templates/section-content/SectionContent';
import VerticalSection from '@/components/templates/vertical-section/VerticalSection';

import SugarCookie from '@assets/img/sugar-cookie.jpg';
import Crackers from '@assets/img/сrackers.jpg';
import PuffPastry from '@assets/img/puff-pastry.jpg';
import Oatmeal from '@assets/img/oatmeal.jpg';
import Rich from '@assets/img/rich.jpg';
import Graham from '@assets/img/graham.jpg';

const COOKIE_TYPES = [
    {
        title: 'Сахарное',
        backgroundImgSrc: SugarCookie,
        url: '/menu?type=Сахарное'
    },
    {
        title: 'Галеты',
        backgroundImgSrc: Crackers,
        url: '/menu?type=Галеты'
    },
    {
        title: 'Затяжное',
        backgroundImgSrc: PuffPastry,
        url: '/menu?type=Затяжное'
    },
    {
        title: 'Овсяное',
        backgroundImgSrc: Oatmeal,
        url: '/menu?type=Овсяное'
    },
    {
        title: 'Сдобное',
        backgroundImgSrc: Rich,
        url: '/menu?type=Сдобное'
    },
    {
        title: 'Крекеры',
        backgroundImgSrc: Graham,
        url: '/menu?type=Крекеры'
    }
]

function FavoriteCookieTypes() {
    return (
        <div className="favorite-cookie-types">
            <TopWave />
            <VerticalSection className="favorite-cookie-types__content">
                <SectionContent>
                    <h1 className="favorite-cookie-types__content__title">Любимые виды печенья на выбор</h1>
                </SectionContent>
                <SectionContent className="favorite-cookie-types__content__types">
                    {COOKIE_TYPES.map((type) => (
                        <TypeForm key={type.title} title={type.title} backgroundImgSrc={type.backgroundImgSrc} url={type.url} />
                    ))}
                </SectionContent>
            </VerticalSection>
            <BottomWave />
        </div>
    )
}

export default FavoriteCookieTypes;


