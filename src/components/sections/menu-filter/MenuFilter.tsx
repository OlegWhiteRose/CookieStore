import { useState, useEffect } from 'react';

import './MenuFilter.scss';

import RangeInput from '@/components/elements/inputs/range-input/RangeInput';
import FilterApplyButton from '@/components/elements/buttons/filter-apply-button/FilterApplyButton';

interface MenuFilterProps {
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

const cookieTypes = [
    { value: 'sugar', label: 'Сахарное' },
    { value: 'oat', label: 'Овсяное' },
    { value: 'galete', label: 'Галеты' },
    { value: 'shortbread', label: 'Сдобное' },
    { value: 'prolonged', label: 'Затяжное' },
    { value: 'cracker', label: 'Крекеры' },
];

function MenuFilter(props: MenuFilterProps) {
    const {
        initialTypes = [],
        initialCostFrom,
        initialCostTo,
        initialQuantityFrom,
        initialQuantityTo,
        onApply
    } = props;

    const [selectedTypes, setSelectedTypes] = useState<string[]>(initialTypes);
    const [costFrom, setCostFrom] = useState<number | undefined>(initialCostFrom);
    const [costTo, setCostTo] = useState<number | undefined>(initialCostTo);
    const [quantityFrom, setQuantityFrom] = useState<number | undefined>(initialQuantityFrom);
    const [quantityTo, setQuantityTo] = useState<number | undefined>(initialQuantityTo);

    useEffect(() => {
        setSelectedTypes(initialTypes);
        setCostFrom(initialCostFrom);
        setCostTo(initialCostTo);
        setQuantityFrom(initialQuantityFrom);
        setQuantityTo(initialQuantityTo);
    }, [initialTypes, initialCostFrom, initialCostTo, initialQuantityFrom, initialQuantityTo]);

    const handleTypeToggle = (value: string) => {
        setSelectedTypes(prev => 
            prev.includes(value)
                ? prev.filter(t => t !== value)
                : [...prev, value]
        );
    };

    const handleApply = () => {
        onApply({
            types: selectedTypes,
            costFrom,
            costTo,
            quantityFrom,
            quantityTo,
        });
    };

    return (
        <div className="menu-filter">
            <div className="menu-filter__section">
                <span className="menu-filter__section-title">Тип печенья</span>
                <div className="menu-filter__checkboxes">
                    {cookieTypes.map((type) => (
                        <label key={type.value} className="menu-filter__checkbox">
                            <input 
                                type="checkbox"
                                checked={selectedTypes.includes(type.value)}
                                onChange={() => handleTypeToggle(type.value)}
                            />
                            <span>{type.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="menu-filter__section">
                <span className="menu-filter__section-title">Цена</span>
                <RangeInput 
                    placeholderFrom="от 0" 
                    placeholderTo="до 10000"
                    valueFrom={costFrom}
                    valueTo={costTo}
                    onChangeFrom={setCostFrom}
                    onChangeTo={setCostTo}
                />
            </div>

            <div className="menu-filter__section">
                <span className="menu-filter__section-title">Кол-во штук в упаковке</span>
                <RangeInput 
                    placeholderFrom="от 0" 
                    placeholderTo="до 50"
                    valueFrom={quantityFrom}
                    valueTo={quantityTo}
                    onChangeFrom={setQuantityFrom}
                    onChangeTo={setQuantityTo}
                />
            </div>

            <div className="menu-filter__section">
                <FilterApplyButton onClick={handleApply} text="Применить" />
            </div>
        </div>
    );
}

export default MenuFilter;
