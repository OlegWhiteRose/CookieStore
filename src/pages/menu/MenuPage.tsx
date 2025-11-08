import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useCookies } from '@/hooks/useCookies';
import { reloadWithParams } from '@/utils/navigation';

import '../pages.scss';
import './MenuPage.scss';

import VerticalSection from '@components/templates/vertical-section/VerticalSection';
import SearchInput from '@components/elements/inputs/search-input/SearchInput';
import SectionContent from '@/components/templates/section-content/SectionContent';
import MenuFilterButton from '@components/elements/buttons/menu-filter-button/MenuFilterButton';
import MenuCard from '@components/menu-card/MenuCard';

import FilterIcon from '@assets/icon/filter.svg?react';

interface FilterState {
    types: string[];
    costFrom?: number;
    costTo?: number;
    quantityFrom?: number;
    quantityTo?: number;
}

function MenuPage() {
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('title') || '');
    
    const titleParam = searchParams.get('title') || '';
    const formatParam = searchParams.get('format') || '';
    const filters: FilterState = {
        types: searchParams.get('type') ? searchParams.get('type')!.split(',') : [],
        costFrom: searchParams.get('cost_from') ? Number(searchParams.get('cost_from')) : undefined,
        costTo: searchParams.get('cost_to') ? Number(searchParams.get('cost_to')) : undefined,
        quantityFrom: searchParams.get('quantity_from') ? Number(searchParams.get('quantity_from')) : undefined,
        quantityTo: searchParams.get('quantity_to') ? Number(searchParams.get('quantity_to')) : undefined,
    };

    const handleFilterApply = (newFilters: {
        format: string;
        types: string[];
        costFrom?: number;
        costTo?: number;
        quantityFrom?: number;
        quantityTo?: number;
    }) => {
        reloadWithParams('/menu', {
            title: titleParam,
            format: newFilters.format,
            type: newFilters.types,
            cost_from: newFilters.costFrom,
            cost_to: newFilters.costTo,
            quantity_from: newFilters.quantityFrom,
            quantity_to: newFilters.quantityTo,
        });
    };

    const handleSearchSubmit = () => {
        reloadWithParams('/menu', {
            title: searchQuery,
            format: formatParam,
            type: filters.types,
            cost_from: filters.costFrom,
            cost_to: filters.costTo,
            quantity_from: filters.quantityFrom,
            quantity_to: filters.quantityTo,
        });
    };

    const { cookies, loading } = useCookies({ 
        title: titleParam || undefined,
        format: formatParam || undefined,
        cost_from: filters.costFrom ?? 0,
        cost_to: filters.costTo ?? 10000,
        quantity_from: filters.quantityFrom ?? 0,
        quantity_to: filters.quantityTo ?? 50,
        type: filters.types.length > 0 ? filters.types.join(',') : undefined,
    });

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
    };

    return (
        <VerticalSection className="page menu-page">
            <SectionContent className="menu-page__main">
                <div className="menu-page__main-search">
                    <SearchInput 
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onSubmit={handleSearchSubmit}
                    />
                    <MenuFilterButton 
                        text="Фильтры" 
                        icon={<FilterIcon />}
                        initialFormat={formatParam}
                        initialTypes={filters.types}
                        initialCostFrom={filters.costFrom}
                        initialCostTo={filters.costTo}
                        initialQuantityFrom={filters.quantityFrom}
                        initialQuantityTo={filters.quantityTo}
                        onApply={handleFilterApply}
                    />
                </div>
            </SectionContent>
            <SectionContent className="menu-page__cards-wrapper">
                {loading && <div className="menu-page__loader">Загрузка...</div>}
                <div className={`menu-page__cards ${loading ? 'menu-page__cards--loading' : ''}`}>
                    {cookies.length > 0 ? (
                        cookies.map((cookie) => (
                            <MenuCard
                                id={cookie.id}
                                imgUrl={cookie.img_url}
                                key={cookie.id}
                                format={cookie.format as 'common' | 'special'}
                                type={cookie.type}
                                title={cookie.title}
                                quantity={cookie.quantity}
                                price={cookie.price}
                            />
                        ))
                    ) : !loading ? (
                        <div className="menu-page__message">Ничего не найдено</div>
                    ) : null}
                </div>
            </SectionContent>
        </VerticalSection>
    )
}

export default MenuPage;

