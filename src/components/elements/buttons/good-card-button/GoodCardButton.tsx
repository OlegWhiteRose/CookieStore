import { useState } from 'react';
import { useRef } from 'react';

import '../buttons.scss';
import './GoodCardButton.scss';

interface GoodCardButtonProps {
    text: string;
}

function GoodCardButton(props: GoodCardButtonProps) {
    const { text} = props;

    let savedText = useRef(text);
    
    const [cnt, setCnt] = useState(0);

    if (cnt > 0) {
        savedText.current = cnt.toString();
    }

    return (
        <button 
            className={`btn btn--secondary btn--align-center good-card-button`} 
            onClick={() => setCnt(cnt + 1)}
        >
            <span>{savedText.current}</span>   
        </button>
    );
}

export default GoodCardButton;

