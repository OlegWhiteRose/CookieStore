import { useSelector, useDispatch } from 'react-redux';
import { addCookie, decreaseCookie } from '@/store/draft/draftReducer';
import { RootState } from '@/store';

import '../buttons.scss';
import './CartItemQuantityButton.scss';

interface CartItemQuantityButtonProps {
    cookieId: number;
}

function CartItemQuantityButton(props: CartItemQuantityButtonProps) {
    const { cookieId } = props;
    const dispatch = useDispatch();
    
    const cnt = useSelector((state: RootState) => {
        const cookie = state.draft.cookies.find(c => c.id === cookieId);
        return cookie ? cookie.quantity : 0;
    });

    const handleDecrease = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(decreaseCookie(cookieId));
    };

    const handleIncrease = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(addCookie(cookieId));
    };

    return (
        <div className="cart-item-quantity-button">
            <div 
                className="cart-item-quantity-button__btn"
                onClick={handleDecrease}
            >
                −
            </div>
            <span className="cart-item-quantity-button__count">{cnt}</span>
            <div 
                className="cart-item-quantity-button__btn"
                onClick={handleIncrease}
            >
                +
            </div>
        </div>
    );
}

export default CartItemQuantityButton;
