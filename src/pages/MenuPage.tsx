import './pages.scss';

import VerticalSection from '@components/templates/vertical-section/VerticalSection';
import MenuSearchInput from '@components/elements/inputs/menu-search-input/MenuSearchInput';
import SectionContent from '@/components/templates/section-content/SectionContent';
import MenuFilterButton from '@components/elements/buttons/menu-filter-button/MenuFilterButton';
import CardsTypeSelect from '@components/sections/cards-type-select/CardsTypeSelect';
import MenuCard from '@components/menu-card/MenuCard';

import FilterIcon from '@assets/icon/filter.svg?react';

function MenuPage() {
    return (
        <VerticalSection className="page menu-page">
            <SectionContent className="menu-page__main">
                <div className="menu-page__main-search">
                    <MenuSearchInput />
                    <MenuFilterButton text="Фильтры" icon={<FilterIcon />} />
                </div>
            </SectionContent>
            <SectionContent className="menu-page__cards-type-select">
                <CardsTypeSelect />
            </SectionContent>
            <SectionContent className="menu-page__cards">
                <MenuCard
                    format="common"
                    type="Сдобное"
                    title="Шоколадный взрыв"
                    quantity="35 шт. в упаковке"
                    price="2500 ₽"
                />
            </SectionContent>
        </VerticalSection>
    )
}

export default MenuPage;

