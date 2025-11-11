import './MenuCard.scss';
import { useState } from 'react';

import MenuCardButton from '../elements/buttons/menu-card-button/MenuCardButton';
import SpecialDateButton from '../elements/buttons/special-date-button/SpecialDateButton';
import DefaultMenuImg from '@/assets/img/default-menu.jpg';
import { ImageSkeleton } from '@/components/skeletons';

interface MenuCardProps {
    id: number;
    format: 'common' | 'special';
    type: string;
    title: string;
    quantity: number;
    price: number;
    imgUrl: string;
}

function MenuCard(props: MenuCardProps) {
    const { id, format, type, title, quantity, price, imgUrl } = props;
    const [imageLoading, setImageLoading] = useState(true);

    return (
        <div className={`menu-card menu-card--format-${format}`}>
            <a href={`/good/${id}`} target="_blank" rel="noopener noreferrer">
                {imageLoading && <ImageSkeleton className="menu-card__skeleton" />}
                <img 
                    src={imgUrl || DefaultMenuImg} 
                    alt="Карточка" 
                    style={{ display: imageLoading ? 'none' : 'block' }}
                    onLoad={() => setImageLoading(false)}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = DefaultMenuImg;
                        setImageLoading(false);
                    }}
                />
            </a>
            <span className="menu-card__type">{type}</span> 
            <a href={`/good/${id}`} target="_blank" rel="noopener noreferrer" className="menu-card__title">
                {title}
            </a>
            <span className="menu-card__quantity">{quantity} шт. в упаковке</span>
            <div className="menu-card__price-row">
                <span className="menu-card__price">{price} ₽</span>
                {format === 'special' && (
                    <SpecialDateButton dateText="Заказать можно только до 10.12.2025" />
                )}
            </div>
            <MenuCardButton format={format} text="В корзину" cookieId={id} />
        </div>
    )
}

export default MenuCard;
