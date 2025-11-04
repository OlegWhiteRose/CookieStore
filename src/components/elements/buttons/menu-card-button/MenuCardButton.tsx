import { useSelector, useDispatch } from 'react-redux';
import { addCookie, decreaseCookie } from '@/store/draft/draftReducer';
import { RootState } from '@/store';

import '../buttons.scss';
import './MenuCardButton.scss';

interface MenuCardButtonProps {
    format: string;
    text: string;
    cookieId: number;
}

function MenuCardButton(props: MenuCardButtonProps) {
    const { text, format, cookieId } = props;
    const dispatch = useDispatch();

    // const btnType = format === 'special' 
    //     ? 'default' : 'secondary';
    
    const btnType = 'secondary';

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

    const handleMainClick = () => {
        if (cnt === 0) {
            dispatch(addCookie(cookieId));
        }
    };

    return (
        <button 
            className={`btn btn--${btnType} btn--align-center menu-card-button ${cnt > 0 ? 'menu-card-button--active' : ''}`} 
            onClick={handleMainClick}
        >
            {cnt > 0 ? (
                <div className="menu-card-button__controls">
                    <div 
                        className="menu-card-button__controls-btn"
                        onClick={handleDecrease}
                    >
                        −
                    </div>
                    <span className="menu-card-button__controls-count">{cnt}</span>
                    <div 
                        className="menu-card-button__controls-btn"
                        onClick={handleIncrease}
                    >
                        +
                    </div>
                </div>
            ) : (
                <span>{text}</span>
            )}
        </button>
    );
}

export default MenuCardButton;

