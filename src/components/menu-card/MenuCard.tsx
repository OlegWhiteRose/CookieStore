import './MenuCard.scss';

import MenuCardButton from '../elements/buttons/menu-card-button/MenuCardButton';

interface MenuCardProps {
    id: number;
    format: string;
    type: string;
    title: string;
    quantity: string;
    price: string;
    imgUrl: string;
}

function MenuCard(props: MenuCardProps) {
    const { id, format, type, title, quantity, price, imgUrl } = props;

    return (
        <div className={`menu-card menu-card--format-${format}`}>
            <a href={`/good/${id}`} target="_blank" rel="noopener noreferrer">
                <img src={imgUrl} alt="Карточка" />
            </a>
            <span className="menu-card__type">{type}</span> 
            <a href={`/good/${id}`} target="_blank" rel="noopener noreferrer" className="menu-card__title">
                {title}
            </a>
            <span className="menu-card__quantity">{quantity}</span>
            <span className="menu-card__price">{price}</span>
            <MenuCardButton format={format} text="В корзину" />
        </div>
    )
}

export default MenuCard;
