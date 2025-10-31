import { useState } from 'react';

import '../buttons.scss';
import './MenuCardButton.scss';

interface MenuCardButtonProps {
    format: string;
    text: string;
}

function MenuCardButton(props: MenuCardButtonProps) {
    const { text, format } = props;

    const btnType = format === 'special' 
        ? 'default' : 'secondary';
    
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

