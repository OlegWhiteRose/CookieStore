import './MenuCard.scss';

import MenuCardButton from '../elements/buttons/menu-card-button/MenuCardButton';

interface MenuCardProps {
    format: string;
    type: string;
    title: string;
    quantity: string;
    price: string;
}

function MenuCard(props: MenuCardProps) {
    const { format, type, title, quantity, price } = props;

    return (
        <div className={`menu-card menu-card--format-${format}`}>
            <img src="" alt="Карточка" />   
            <span className="menu-card__type">{type}</span> 
            <span className="menu-card__title">{title}</span>         
            <span className="menu-card__quantity">{quantity}</span>
            <span className="menu-card__price">{price}</span>
            <MenuCardButton text="В корзину" />
        </div>
    )
}

export default MenuCard;
