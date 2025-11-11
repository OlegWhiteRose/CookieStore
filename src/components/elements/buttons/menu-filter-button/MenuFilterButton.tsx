import { useRef, useState } from 'react';

import '../buttons.scss';
import './MenuFilterButton.scss';

import Poppup from '@/components/templates/poppup/Poppup';
import MenuFilter from '@/components/sections/menu-filter/MenuFilter';

import CloseIcon from '@assets/icon/close-bold.svg?react';

interface MenuFilterButtonProps {
    text: string;
    icon: React.ReactNode;
    initialFormat?: string;
    initialTypes?: string[];
    initialCostFrom?: number;
    initialCostTo?: number;
    initialQuantityFrom?: number;
    initialQuantityTo?: number;
    maxCostTo?: number;
    maxQuantityTo?: number;
    onApply: (filters: {
        format: string;
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
        initialFormat,
        initialTypes,
        initialCostFrom,
        initialCostTo,
        initialQuantityFrom,
        initialQuantityTo,
        maxCostTo,
        maxQuantityTo,
        onApply 
    } = props;
    
    const [active, setActive] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleButtonClick = () => {
        setActive(!active);
    };

    const handleApply = (filters: {
        format: string;
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
        <div className="menu-filter-button-wrapper">
            <button 
                ref={buttonRef}
                className="btn btn--default btn--align-center menu-filter-button" 
                onClick={handleButtonClick}
            >
                <span className="menu-filter-button__icon">{active ? <CloseIcon /> : icon}</span>
                <span className="menu-filter-button__text">{text}</span>
            </button>

            <Poppup active={active} setActive={setActive} tagFor={buttonRef}>
                <MenuFilter
                    initialFormat={initialFormat}
                    initialTypes={initialTypes}
                    initialCostFrom={initialCostFrom}
                    initialCostTo={initialCostTo}
                    initialQuantityFrom={initialQuantityFrom}
                    initialQuantityTo={initialQuantityTo}
                    maxCostTo={maxCostTo}
                    maxQuantityTo={maxQuantityTo}
                    onApply={handleApply}
                    onClose={() => setActive(false)}
                />
            </Poppup>
        </div>
    );
}

export default MenuFilterButton;

