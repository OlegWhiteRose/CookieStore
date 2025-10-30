import { useState } from 'react';

import '../buttons.scss';
import './GoodCardButton.scss';

interface GoodCardButtonProps {
    text: string;
}

function GoodCardButton(props: GoodCardButtonProps) {
    const { text } = props;
    
    const [cnt, setCnt] = useState(0);

    const handleDecrease = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (cnt > 0) {
            setCnt(cnt - 1);
        }
    };

    const handleIncrease = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCnt(cnt + 1);
    };

    const handleMainClick = () => {
        if (cnt === 0) {
            setCnt(1);
        }
    };

    return (
        <button 
            className={`btn btn--secondary btn--align-center good-card-button ${cnt > 0 ? 'good-card-button--active' : ''}`} 
            onClick={handleMainClick}
        >
            {cnt > 0 ? (
                <div className="good-card-button__controls">
                    <button 
                        className="good-card-button__controls-btn"
                        onClick={handleDecrease}
                    >
                        −
                    </button>
                    <span className="good-card-button__controls-count">{cnt}</span>
                    <button 
                        className="good-card-button__controls-btn"
                        onClick={handleIncrease}
                    >
                        +
                    </button>
                </div>
            ) : (
                <span>{text}</span>
            )}
        </button>
    );
}

export default GoodCardButton;

