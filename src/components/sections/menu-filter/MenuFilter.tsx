import { useState, useEffect, useRef } from 'react';

import './MenuFilter.scss';

import RangeInput from '@/components/elements/inputs/range-input/RangeInput';
import FilterApplyButton from '@/components/elements/buttons/filter-apply-button/FilterApplyButton';
import CloseIcon from '@assets/icon/close-bold.svg?react';

interface MenuFilterProps {
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
    onClose?: () => void;
}

const cookieTypes = [
    { value: 'Сахарное', label: 'Сахарное' },
    { value: 'Овсяное', label: 'Овсяное' },
    { value: 'Галеты', label: 'Галеты' },
    { value: 'Сдобное', label: 'Сдобное' },
    { value: 'Затяжное', label: 'Затяжное' },
    { value: 'Крекеры', label: 'Крекеры' },
];

function MenuFilter(props: MenuFilterProps) {
    const {
        initialFormat = '',
        initialTypes = [],
        initialCostFrom,
        initialCostTo,
        initialQuantityFrom,
        initialQuantityTo,
        maxCostTo = 10000,
        maxQuantityTo = 500,
        onApply,
        onClose
    } = props;

    const [selectedFormat, setSelectedFormat] = useState<string>(initialFormat);
    const [selectedTypes, setSelectedTypes] = useState<string[]>(initialTypes);
    const [costFrom, setCostFrom] = useState<number | undefined>(initialCostFrom);
    const [costTo, setCostTo] = useState<number | undefined>(initialCostTo);
    const [quantityFrom, setQuantityFrom] = useState<number | undefined>(initialQuantityFrom);
    const [quantityTo, setQuantityTo] = useState<number | undefined>(initialQuantityTo);

    const panelRef = useRef<HTMLDivElement>(null);
    const touchStartY = useRef<number>(0);
    const scrollTop = useRef<number>(0);
    const [isDragging, setIsDragging] = useState(false);
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        setSelectedFormat(initialFormat);
        setSelectedTypes(initialTypes);
        setCostFrom(initialCostFrom);
        setCostTo(initialCostTo);
        setQuantityFrom(initialQuantityFrom);
        setQuantityTo(initialQuantityTo);
    }, [initialFormat, initialTypes, initialCostFrom, initialCostTo, initialQuantityFrom, initialQuantityTo]);

    const handleTypeToggle = (value: string) => {
        setSelectedTypes(prev => 
            prev.includes(value)
                ? prev.filter(t => t !== value)
                : [...prev, value]
        );
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (panelRef.current) {
            scrollTop.current = panelRef.current.scrollTop;
        }
        touchStartY.current = e.touches[0].clientY;
        setIsDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        
        const currentY = e.touches[0].clientY;
        const diff = currentY - touchStartY.current;
        
        if (diff > 0 && scrollTop.current === 0) {
            e.preventDefault(); 
            setTranslateY(diff);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        
        if (translateY > 80) {
            setTranslateY(400);
            setTimeout(() => {
                onClose?.();
            }, 200);
        } else {
            setTranslateY(0);
        }
    };

    const handleApply = () => {
        onApply({
            format: selectedFormat,
            types: selectedTypes,
            costFrom,
            costTo,
            quantityFrom,
            quantityTo,
        });
    };

    return (
        <div 
            className="menu-filter"
            ref={panelRef}
            style={{
                transform: `translateY(${translateY}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out, opacity 0.3s ease-out',
                opacity: translateY > 0 ? Math.max(0.5, 1 - translateY / 300) : 1
            }}
        >
            <div 
                className="menu-filter__handle"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd}
            ></div>
            <div className="menu-filter__header">
                <h3 className="menu-filter__title">Фильтры</h3>
                <button 
                    className="menu-filter__close" 
                    onClick={onClose}
                    aria-label="Закрыть"
                >
                    <CloseIcon />
                </button>
            </div>
            <div className="menu-filter__section">
                <span className="menu-filter__section-title">Формат товара</span>
                <div className="menu-filter__format-select">
                    <label className="menu-filter__radio">
                        <input
                            type="radio"
                            name="format"
                            checked={selectedFormat === ''}
                            onChange={() => setSelectedFormat('')}
                        />
                        <span>Все товары</span>
                    </label>
                    <label className="menu-filter__radio">
                        <input
                            type="radio"
                            name="format"
                            checked={selectedFormat === 'common'}
                            onChange={() => setSelectedFormat('common')}
                        />
                        <span>Стандартный товар</span>
                    </label>
                    <label className="menu-filter__radio">
                        <input
                            type="radio"
                            name="format"
                            checked={selectedFormat === 'special'}
                            onChange={() => setSelectedFormat('special')}
                        />
                        <span>Ограниченный выпуск</span>
                    </label>
                </div>
            </div>

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
                    placeholderTo={`до ${maxCostTo}`}
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
                    placeholderTo={`до ${maxQuantityTo}`}
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
