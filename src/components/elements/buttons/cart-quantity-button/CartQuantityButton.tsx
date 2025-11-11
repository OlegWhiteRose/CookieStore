import { useSelector, useDispatch } from 'react-redux';
import { addCookie, decreaseCookie } from '@/store/draft/draftReducer';
import { RootState } from '@/store';

import '../buttons.scss';
import './CartQuantityButton.scss';

interface CartQuantityButtonProps {
    cookieId: number;
}

function CartQuantityButton(props: CartQuantityButtonProps) {
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
        <div className="cart-quantity-button">
            <button 
                className="cart-quantity-button__btn"
                onClick={handleDecrease}
            >
                −
            </button>
            <span className="cart-quantity-button__count">{cnt}</span>
            <button 
                className="cart-quantity-button__btn"
                onClick={handleIncrease}
            >
                +
            </button>
        </div>
    );
}

export default CartQuantityButton;
