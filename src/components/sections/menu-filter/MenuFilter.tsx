import './MenuFilter.scss';

import RangeInput from '@/components/elements/inputs/range-input/RangeInput';

function MenuFilter() {
    return (
        <div className="menu-filter">
            <div className="menu-filter__section">
                <span className="menu-filter__section-title">Тип печенья</span>
                <div className="menu-filter__checkboxes">
                    <label className="menu-filter__checkbox">
                        <input type="checkbox" />
                        <span>Сахарное</span>
                    </label>
                    <label className="menu-filter__checkbox">
                        <input type="checkbox" />
                        <span>Овсяное</span>
                    </label>
                    <label className="menu-filter__checkbox">
                        <input type="checkbox" />
                        <span>Галеты</span>
                    </label>
                    <label className="menu-filter__checkbox">
                        <input type="checkbox" />
                        <span>Сдобное</span>
                    </label>
                    <label className="menu-filter__checkbox">
                        <input type="checkbox" />
                        <span>Затяжное</span>
                    </label>
                    <label className="menu-filter__checkbox">
                        <input type="checkbox" />
                        <span>Крекеры</span>
                    </label>
                </div>
            </div>

            <div className="menu-filter__section">
                <span className="menu-filter__section-title">Цена</span>
                <RangeInput placeholderFrom="от 0" placeholderTo="до 10000" />
            </div>

            <div className="menu-filter__section">
                <span className="menu-filter__section-title">Кол-во штук в упаковке</span>
                <RangeInput placeholderFrom="от 0" placeholderTo="до 50" />
            </div>
        </div>
    );
}

export default MenuFilter;
