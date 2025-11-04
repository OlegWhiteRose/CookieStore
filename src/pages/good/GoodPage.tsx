import { useParams } from 'react-router-dom';

import '../pages.scss';
import './GoodPage.scss';

import AttentionIcon from '@/assets/icon/attention_danger_icon.svg?react';

import VerticalSection from '@components/templates/vertical-section/VerticalSection';
import SectionContent from '@/components/templates/section-content/SectionContent';
import GoodCardButton from '@components/elements/buttons/good-card-button/GoodCardButton';
import { useCookie } from '@/hooks/useCookie';

function GoodPage() {
    const { id } = useParams();
    const { cookie, loading, error } = useCookie(id);

    if (loading) {
        return (
            <VerticalSection className="page good-page">
                <SectionContent className="good-page__main">
                    <div>Загрузка...</div>
                </SectionContent>
            </VerticalSection>
        );
    }

    if (error || !cookie) {
        return (
            <VerticalSection className="page good-page">
                <SectionContent className="good-page__main">
                    <div>Товар не найден</div>
                </SectionContent>
            </VerticalSection>
        );
    }

    const format = cookie.format;

    return (
        <VerticalSection className="page good-page">
            <SectionContent className={`good-page__main good-page__main--format-${format}`}>
                <div className="good-page__main__container">
                    <div className="good-page__main__container__image-container">
                        <img src={cookie.img_url} alt={cookie.title} />
                    </div>

                    <div className="good-page__main__container__right">
                        <div className="good-page__main__container__right__title">{cookie.title}</div>
                        <div className="good-page__main__container__right__price">{cookie.price} ₽</div>
                        
                        <div className="good-page__main__container__right__add-to-cart">
                            <GoodCardButton text="В корзину" cookieId={cookie.id} />
                        </div>

                        <div className="good-page__main__container__right__section">
                            <span className="good-page__main__container__right__section-label">Тип печенья:</span>
                            <span className="good-page__main__container__right__section-text">
                                <span>{cookie.type}</span>
                            </span>
                        </div>

                        <div className="good-page__main__container__right__section">
                            <span className="good-page__main__container__right__section-label">Количество штук в упаковке:</span>
                            <span className="good-page__main__container__right__section-text">
                                <span>{cookie.quantity}</span>
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
                            <div className="good-page__main__container__bottom__section-text">{cookie.description}</div>
                        </div>

                        <div className="good-page__main__container__bottom__section">
                            <div className="good-page__main__container__bottom__section-label">Состав:</div>
                            <div className="good-page__main__container__bottom__section-text">{cookie.ingredients}</div>
                        </div>

                        <div className="good-page__main__container__bottom__section">
                            <div className="good-page__main__container__bottom__section-label">Адрес производства:</div>
                            <div className="good-page__main__container__bottom__section-text">{cookie.address}</div>
                        </div>
                    </div>
                </div>
            </SectionContent>
        </VerticalSection>  
    )
}

export default GoodPage;
