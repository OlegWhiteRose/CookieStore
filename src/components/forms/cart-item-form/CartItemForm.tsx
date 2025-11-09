import { useDispatch } from 'react-redux';
import { removeCookie } from '@/store/draft/draftReducer';

import './CartItemForm.scss';

import CartItemQuantityButton from '@components/elements/buttons/cart-item-quantity-button/CartItemQuantityButton';

import CloseBoldIcon from '@assets/icon/close-bold.svg?react';
import DefaultMenuImg from '@/assets/img/default-menu.jpg';

interface CartItemFormProps {
    id: number;
    title: string;
    quantity: number;
    totalPrice: number;
    imgUrl: string;
}

function CartItemForm(props: CartItemFormProps) {
    const { id, title, quantity, totalPrice, imgUrl } = props;
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeCookie(id));
    };

    return (
        <div className="cart-item-form">
            <button className="cart-item-form__remove" onClick={handleRemove}>
                <CloseBoldIcon />
            </button>
            <div className="cart-item-form__image-wrapper">
                <img 
                    src={imgUrl || DefaultMenuImg} 
                    alt={title} 
                    className="cart-item-form__image"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = DefaultMenuImg;
                    }}
                />
            </div>
            <div className="cart-item-form__content">
                <div className="cart-item-form__left">
                    <span className="cart-item-form__title">{title}</span>
                    <span className="cart-item-form__quantity">{quantity} шт. в упаковке</span>
                    <span className="cart-item-form__price">{totalPrice} ₽</span>
                </div>
                <div className="cart-item-form__footer">
                    <CartItemQuantityButton cookieId={id} />
                </div>
            </div>
        </div>
    );
}

export default CartItemForm;
