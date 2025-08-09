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
    },
    {
        title: 'Галеты',
        backgroundImgSrc: Crackers,
    },
    {
        title: 'Затяжное',
        backgroundImgSrc: PuffPastry,
    },
    {
        title: 'Овсяное',
        backgroundImgSrc: Oatmeal,
    },
    {
        title: 'Сдобное',
        backgroundImgSrc: Rich,
    },
    {
        title: 'Крекеры',
        backgroundImgSrc: Graham,
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
                        <TypeForm key={type.title} title={type.title} backgroundImgSrc={type.backgroundImgSrc} />
                    ))}
                </SectionContent>
            </VerticalSection>
            <BottomWave />
        </div>
    )
}

export default FavoriteCookieTypes;


