import './CardsTypeSelect.scss';

function CardsTypeSelect() {
    return (
        <div className="cards-type-select">
            <input defaultChecked type="radio" name="cards-type-selector" id="all-types"/>
            <label htmlFor="all-types">Все товары</label>

            <input type="radio" name="cards-type-selector" id="standard-type"/>
            <label htmlFor="standard-type">Стандартный товар</label>

            <input type="radio" name="cards-type-selector" id="limited-release-type"/>
            <label htmlFor="limited-release-type">Ограниченный выпуск</label>
        </div>
    )
};

export default CardsTypeSelect;
