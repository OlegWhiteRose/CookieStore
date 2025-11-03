import './MenuSearchInput.scss';

import SearchIcon from '@assets/icon/search.svg?react';
import SearchButton from '@/components/elements/buttons/search-button/SearchButton';

interface MenuSearchInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit?: () => void;
}

function MenuSearchInput(props: MenuSearchInputProps) {
    const { value, onChange, onSubmit } = props;
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onSubmit) {
            onSubmit();
        }
    };

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
                onKeyDown={handleKeyDown}
            />
            <SearchButton onClick={onSubmit} text="Найти" />
        </div>
    )
}

export default MenuSearchInput;

