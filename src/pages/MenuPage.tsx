import './pages.scss';

import VerticalSection from '@components/templates/vertical-section/VerticalSection';
import MenuSearchInput from '@components/elements/inputs/menu-search-input/MenuSearchInput';
import SectionContent from '@/components/templates/section-content/SectionContent';
import { MenuFilterButton } from '@components/elements/buttons/buttons';

function MenuPage() {
    return (
        <VerticalSection className="page menu-page">
            <SectionContent className="menu-page__main">
                <div className="menu-page__main-search">
                    <MenuSearchInput />
                    <MenuFilterButton text="Фильтры" />
                </div>
            </SectionContent>
        </VerticalSection>
    )
}

export default MenuPage;

