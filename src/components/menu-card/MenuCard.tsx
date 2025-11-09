import './MenuCard.scss';

import MenuCardButton from '../elements/buttons/menu-card-button/MenuCardButton';
import DefaultMenuImg from '@/assets/img/default-menu.jpg';

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

    return (
        <div className={`menu-card menu-card--format-${format}`}>
            <a href={`/good/${id}`} target="_blank" rel="noopener noreferrer">
                <img 
                    src={imgUrl || DefaultMenuImg} 
                    alt="Карточка" 
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = DefaultMenuImg;
                    }}
                />
            </a>
            <span className="menu-card__type">{type}</span> 
            <a href={`/good/${id}`} target="_blank" rel="noopener noreferrer" className="menu-card__title">
                {title}
            </a>
            <span className="menu-card__quantity">{quantity} шт. в упаковке</span>
            <span className="menu-card__price">{price} ₽</span>
            <MenuCardButton format={format} text="В корзину" cookieId={id} />
        </div>
    )
}

export default MenuCard;
