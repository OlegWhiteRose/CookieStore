import { useRef, useState } from 'react';

import '../buttons.scss';
import './MenuFilterButton.scss';

import Poppup from '@/components/templates/poppup/Poppup';
import MenuFilter from '@/components/sections/menu-filter/MenuFilter';

import CloseIcon from '@assets/icon/close-bold.svg?react';

interface MenuFilterButtonProps {
    text: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

function MenuFilterButton(props: MenuFilterButtonProps) {
    const { text, icon, onClick } = props;
    
    const [active, setActive] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleButtonClick = () => {
        setActive(!active);

        onClick?.();
    };

    return (
        <>
            <button 
                ref={buttonRef}
                className="btn btn--default btn--align-center menu-filter-button" 
                onClick={handleButtonClick}
            >
                <span className="menu-filter-button__icon">{active ? <CloseIcon /> : icon}</span>
                {text}  
            </button>

            <Poppup active={active} setActive={setActive} tagFor={buttonRef} align="right" top={100}>
                <MenuFilter />
            </Poppup>
        </>
    );
}

export default MenuFilterButton;

