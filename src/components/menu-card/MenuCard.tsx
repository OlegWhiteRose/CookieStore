import { Link } from 'react-router-dom';

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
            <img src={imgUrl} alt="Карточка" />   
            <span className="menu-card__type">{type}</span> 
            <Link to={`/good/${id}`} className="menu-card__title">{title}</Link>         
            <span className="menu-card__quantity">{quantity}</span>
            <span className="menu-card__price">{price}</span>
            <MenuCardButton format={format} text="В корзину" />
        </div>
    )
}

export default MenuCard;
