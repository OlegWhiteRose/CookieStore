import './MenuSearchInput.scss';

import SearchIcon from '@assets/icon/search.svg?react';

interface MenuSearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

function MenuSearchInput(props: MenuSearchInputProps) {
    const { value, onChange } = props;
    
    return (
        <div className="menu-search-input">
            <div className="menu-search-input__icon">
                <SearchIcon />
            </div>
            <input 
                className="menu-search-input__input" 
                type="text" 
                placeholder="Найти товар"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default MenuSearchInput;

