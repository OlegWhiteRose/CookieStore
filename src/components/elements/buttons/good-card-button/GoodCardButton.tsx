import { useSelector, useDispatch } from 'react-redux';
import { addCookie, decreaseCookie } from '@/store/draft/draftReducer';
import { RootState } from '@/store';

import '../buttons.scss';
import './GoodCardButton.scss';

interface GoodCardButtonProps {
    text: string;
    cookieId: number;
}

function GoodCardButton(props: GoodCardButtonProps) {
    const { text, cookieId } = props;
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

    const handleMainClick = () => {
        if (cnt === 0) {
            dispatch(addCookie(cookieId));
        }
    };

    return (
        <button 
            className={`btn btn--secondary btn--align-center good-card-button ${cnt > 0 ? 'good-card-button--active' : ''}`} 
            onClick={handleMainClick}
        >
            {cnt > 0 ? (
                    <div className="good-card-button__controls">
                    <div 
                        className="good-card-button__controls-btn"
                        onClick={handleDecrease}
                    >
                        −
                    </div>
                    <span className="good-card-button__controls-count">{cnt}</span>
                    <div 
                        className="good-card-button__controls-btn"
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

export default GoodCardButton;

