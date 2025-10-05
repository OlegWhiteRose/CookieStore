import './MenuSearchInput.scss';

import SearchIcon from '@assets/icon/search.svg?react';

function MenuSearchInput() {
    return (
        <div className="menu-search-input">
            <div className="menu-search-input__icon">
                <SearchIcon />
            </div>
            <input className="menu-search-input__input" type="text" placeholder="Найти товар" />
        </div>
    )
}

export default MenuSearchInput;

