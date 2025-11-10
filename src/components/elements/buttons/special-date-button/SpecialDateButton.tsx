import { useRef, useState } from 'react';

import '../buttons.scss';
import './SpecialDateButton.scss';

import Poppup from '@/components/templates/poppup/Poppup';
import AttentionIcon from '@assets/icon/attention_danger_icon.svg?react';

interface SpecialDateButtonProps {
    dateText: string;
}

function SpecialDateButton({ dateText }: SpecialDateButtonProps) {
    const [active, setActive] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <button 
                ref={buttonRef}
                className="special-date-button" 
                onClick={() => setActive(!active)}
                aria-label="Информация о дате заказа"
            >
                <AttentionIcon />
            </button>

            <Poppup active={active} setActive={setActive} tagFor={buttonRef} top={40}>
                <div className="special-date-button__content">
                    {dateText}
                </div>
            </Poppup>
        </>
    );
}

export default SpecialDateButton;
