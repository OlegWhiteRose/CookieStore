import { useRef, useState } from 'react';

import '../buttons.scss';
import './MenuFilterButton.scss';

import Poppup from '@/components/templates/poppup/Poppup';
import MenuFilter from '@/components/sections/menu-filter/MenuFilter';

import CloseIcon from '@assets/icon/close-bold.svg?react';

interface MenuFilterButtonProps {
    text: string;
    icon: React.ReactNode;
    initialTypes?: string[];
    initialCostFrom?: number;
    initialCostTo?: number;
    initialQuantityFrom?: number;
    initialQuantityTo?: number;
    onApply: (filters: {
        types: string[];
        costFrom?: number;
        costTo?: number;
        quantityFrom?: number;
        quantityTo?: number;
    }) => void;
}

function MenuFilterButton(props: MenuFilterButtonProps) {
    const { 
        text, 
        icon, 
        initialTypes,
        initialCostFrom,
        initialCostTo,
        initialQuantityFrom,
        initialQuantityTo,
        onApply 
    } = props;
    
    const [active, setActive] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleButtonClick = () => {
        setActive(!active);
    };

    const handleApply = (filters: {
        types: string[];
        costFrom?: number;
        costTo?: number;
        quantityFrom?: number;
        quantityTo?: number;
    }) => {
        onApply(filters);
        setActive(false);
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

            <Poppup active={active} setActive={setActive} tagFor={buttonRef} align="right" top={80}>
                <MenuFilter 
                    initialTypes={initialTypes}
                    initialCostFrom={initialCostFrom}
                    initialCostTo={initialCostTo}
                    initialQuantityFrom={initialQuantityFrom}
                    initialQuantityTo={initialQuantityTo}
                    onApply={handleApply}
                />
            </Poppup>
        </>
    );
}

export default MenuFilterButton;

