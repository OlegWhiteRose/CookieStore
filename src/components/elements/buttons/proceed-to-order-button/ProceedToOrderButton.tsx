import { useNavigate } from 'react-router-dom';

import '../buttons.scss';
import './ProceedToOrderButton.scss';

import RedirectIcon from '@assets/icon/redirect.svg?react';

interface ProceedToOrderButtonProps {
    text: string;
}

function ProceedToOrderButton(props: ProceedToOrderButtonProps) {
    const { text } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/order?mode=order');
    };
    
    return (
        <button 
            className="btn btn--secondary btn--hover-effect-lift proceed-to-order-button" 
            onClick={handleClick}
        >
            <RedirectIcon />
            <span>{text}</span>
        </button>
    );
}

export default ProceedToOrderButton;
