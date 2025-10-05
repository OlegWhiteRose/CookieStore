import './pages.scss';

import VerticalSection from '@components/templates/vertical-section/VerticalSection';
import MenuSearchInput from '@components/elements/inputs/menu-search-input/MenuSearchInput';
import SectionContent from '@/components/templates/section-content/SectionContent';
import { MenuFilterButton } from '@components/elements/buttons/buttons';

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
        </VerticalSection>
    )
}

export default MenuPage;

