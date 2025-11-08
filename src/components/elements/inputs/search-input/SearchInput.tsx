import '../inputs.scss';
import './SearchInput.scss';

import SearchIcon from '@assets/icon/search.svg?react';
import SearchButton from '@/components/elements/buttons/search-button/SearchButton';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit?: () => void;
    placeholder?: string;
}

function SearchInput(props: SearchInputProps) {
    const { value, onChange, onSubmit, placeholder = "Введите название товара" } = props;
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onSubmit) {
            onSubmit();
        }
    };

    return (
        <div className="search-input">
            <div className="search-input__icon">
                <SearchIcon />
            </div>
            <input 
                className="input-control input-control--transparent search-input__field" 
                type="text" 
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <SearchButton onClick={onSubmit} text="Найти" />
        </div>
    );
}

export default SearchInput;
