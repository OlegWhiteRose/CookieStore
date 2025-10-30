import { useParams } from 'react-router-dom';

import '../pages.scss';
import './GoodPage.scss';

import AttentionIcon from '@/assets/icon/attention_danger_icon.svg?react';

import VerticalSection from '@components/templates/vertical-section/VerticalSection';
import SectionContent from '@/components/templates/section-content/SectionContent';
import GoodCardButton from '@components/elements/buttons/good-card-button/GoodCardButton';

const MOCK_GOODS = {
    common: {
        id: 1,
        title: 'Шоколадный Взрыв',
        price: '2500 ₽',
        format: 'common',
        type: 'Сдобное',
        imgUrl: '/img/cookie.jpg',
        description: 'Погружайтесь в мир настоящего шоколадного наслаждения с печеньем «Шоколадный Взрыв»! Мягкое, ароматное, тесто сочетается с крупными кусочками темного молочного шоколада, создавая взрыв насыщенным шоколадным вкусом и ненавязчивым послевкусием.',
        ingredients: 'Пшеничная мука высшего сорта, сливочное масло, сахар, коричневый тростниковый сахар, яйца, шоколад (тёмный какао-массо, какао тёртое, какао-порошок, ванилин), разрыхлитель, пищевая соль, экстракт ванили. Пищевая ценность на 100г: калории 450, белки 6г, жиры 22г, углеводы 55г.',
        address: 'Россия, г. Тверь, ул. Школьников, д. 15, корп. 2',
        quantity: 12,
    },
    special: {
        id: 2,
        title: 'Карамельное Сдобное',
        price: '3500 ₽',
        format: 'special',
        type: 'Сдобное',
        imgUrl: '/img/cookie.jpg',
        description: 'Насладитесь нежным вкусом карамели в каждом кусочке! Это печенье сочетает в себе мягкое тесто и сладкую карамельную начинку, создавая идеальный баланс вкусов.',
        ingredients: 'Пшеничная мука, сливочное масло, сахар, карамель, яйца, разрыхлитель, соль, ваниль.',
        address: 'Россия, г. Тверь, ул. Школьников, д. 15, корп. 2',
        quantity: 12,
    }
};

function GoodPage() {
    const { id } = useParams();
    
    const format = id && parseInt(id) % 2 === 0 ? 'special' : 'common';
    const good = MOCK_GOODS[format as keyof typeof MOCK_GOODS];

    return (
        <VerticalSection className="page good-page">
            <SectionContent className={`good-page__main good-page__main--format-${format}`}>
                <div className="good-page__main__container">
                    <div className="good-page__main__container__image-container">
                        <img src={good.imgUrl} alt={good.title} />
                    </div>

                    <div className="good-page__main__container__right">
                        <div className="good-page__main__container__right__title">{good.title}</div>
                        <div className="good-page__main__container__right__price">{good.price}</div>
                        
                        <div className="good-page__main__container__right__add-to-cart">
                            <GoodCardButton text="В корзину" />
                        </div>

                        <div className="good-page__main__container__right__section">
                            <span className="good-page__main__container__right__section-label">Тип печенья:</span>
                            <span className="good-page__main__container__right__section-text">
                                <span>{good.type}</span>
                            </span>
                        </div>

                        <div className="good-page__main__container__right__section">
                            <span className="good-page__main__container__right__section-label">Количество штук в упаковке:</span>
                            <span className="good-page__main__container__right__section-text">
                                <span>{good.quantity}</span>
                            </span>
                        </div>
                    </div>

                    <div className="good-page__main__container__bottom">
                        <div className="good-page__main__container__bottom__attention-date">
                            <div className="good-page__main__container__bottom__attention-date__icon">
                                <AttentionIcon />
                            </div>
                            <span>Заказать можно только до 10.12.2025</span>
                            <div className="good-page__main__container__bottom__attention-date__icon">
                                <AttentionIcon />
                            </div>
                        </div>

                        <div className="good-page__main__container__bottom__section">
                            <div className="good-page__main__container__bottom__section-label">Описание:</div>
                            <div className="good-page__main__container__bottom__section-text">{good.description}</div>
                        </div>

                        <div className="good-page__main__container__bottom__section">
                            <div className="good-page__main__container__bottom__section-label">Состав:</div>
                            <div className="good-page__main__container__bottom__section-text">{good.ingredients}</div>
                        </div>

                        <div className="good-page__main__container__bottom__section">
                            <div className="good-page__main__container__bottom__section-label">Адрес производства:</div>
                            <div className="good-page__main__container__bottom__section-text">{good.address}</div>
                        </div>
                    </div>
                </div>
            </SectionContent>
        </VerticalSection>  
    )
}

export default GoodPage;
