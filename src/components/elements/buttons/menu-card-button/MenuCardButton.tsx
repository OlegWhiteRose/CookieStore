import { useState } from 'react';
import { useRef } from 'react';

import '../buttons.scss';
import './MenuCardButton.scss';

interface MenuCardButtonProps {
    format: string;
    text: string;
}

function MenuCardButton(props: MenuCardButtonProps) {
    const { text, format} = props;

    const btnType = format === 'special' 
        ? 'default' : 'secondary';

    let savedText = useRef(text);
    
    const [cnt, setCnt] = useState(0);

    if (cnt > 0) {
        savedText.current = cnt.toString();
    }

    return (
        <button 
            className={`btn btn--${btnType} btn--align-center menu-card-button`} 
            onClick={() => setCnt(cnt + 1)}
        >
            {savedText.current}   
        </button>
    );
}

export default MenuCardButton;

