import './CardsTypeSelect.scss';

interface CardsTypeSelectProps {
    value: string;
    onChange: (format: string) => void;
}

function CardsTypeSelect(props: CardsTypeSelectProps) {
    const { value, onChange } = props;

    return (
        <div className="cards-type-select">
            <input 
                checked={value === ''} 
                type="radio" 
                name="cards-type-selector" 
                id="all-types"
                onChange={() => onChange('')}
            />
            <label htmlFor="all-types">Все товары</label>

            <input 
                checked={value === 'common'} 
                type="radio" 
                name="cards-type-selector" 
                id="standard-type"
                onChange={() => onChange('common')}
            />
            <label htmlFor="standard-type">Стандартный товар</label>

            <input 
                checked={value === 'special'} 
                type="radio" 
                name="cards-type-selector" 
                id="limited-release-type"
                onChange={() => onChange('special')}
            />
            <label htmlFor="limited-release-type">Ограниченный выпуск</label>
        </div>
    )
};

export default CardsTypeSelect;
