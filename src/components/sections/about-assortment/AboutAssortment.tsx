import './AboutAssortment.scss';

import SectionContent from '@/components/templates/section-content/SectionContent';
import AssortmentItemForm from '@/components/forms/assortment-item-form/AssortmentItemForm';
import SugarCookieImg from '@/assets/img/sugar-cookie-square.png';
import OatmealImg from '@/assets/img/oatmeal-square.png';
import GrahamImg from '@/assets/img/graham-square.png';
import RichImg from '@/assets/img/rich.jpg';
import PuffPastryImg from '@/assets/img/puff-pastry.jpg';
import CrackersImg from '@/assets/img/сrackers.jpg';

const ASSORTMENT_ITEMS = [
    {
        imageSrc: SugarCookieImg,
        imageAlt: 'Сахарное печенье',
        title: 'Сахарное печенье',
        description: 'Классика, которая никогда не устаревает. Хрустящее и ароматное печенье с нежной текстурой.'
    },
    {
        imageSrc: OatmealImg,
        imageAlt: 'Овсяное печенье',
        title: 'Овсяное печенье',
        description: 'Полезное и вкусное лакомство из натуральных овсяных хлопьев с добавлением меда.'
    },
    {
        imageSrc: GrahamImg,
        imageAlt: 'Галеты',
        title: 'Галеты',
        description: 'Простое и хрустящее печенье на каждый день, идеально подходит для перекуса.'
    },
    {
        imageSrc: RichImg,
        imageAlt: 'Сдобное печенье',
        title: 'Сдобное печенье',
        description: 'Нежное и рассыпчатое удовольствие с богатым сливочным вкусом и ароматом ванили. Готовится с добавлением большого количества масла и яиц.'
    },
    {
        imageSrc: PuffPastryImg,
        imageAlt: 'Затяжное печенье',
        title: 'Затяжное печенье',
        description: 'Идеально к чаю или кофе. Плотная текстура и сбалансированная сладость.'
    },
    {
        imageSrc: CrackersImg,
        imageAlt: 'Крекеры',
        title: 'Крекеры',
        description: 'Хрустящие снеки для перекуса с различными вкусами и добавками.'
    }
];

function AboutAssortment() {
    return (
        <SectionContent className="about-page__section">
            <h2 className="about-page__section-title">Наш ассортимент</h2>
            <p className="about-page__text">
                В нашем магазине вы найдете широкий выбор печенья на любой вкус
            </p>
            <div className="about-page__assortment">
                {ASSORTMENT_ITEMS.map((item) => (
                    <AssortmentItemForm 
                        key={item.title}
                        imageSrc={item.imageSrc}
                        imageAlt={item.imageAlt}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </SectionContent>
    );
}

export default AboutAssortment;
